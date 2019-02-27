import React from 'react';

var Tags = React.createClass({
    setFilter: function(filter) {
      this.props.onChangeFilter(filter);
    },
    render: function() {
      return <div className="tags">
        <a className="btn btn-success" onClick={this.setFilter.bind(this, '')}>All</a>
        <a className="btn btn-default" onClick={this.setFilter.bind(this, 'male')}>male</a>
        <a className="btn btn-default" onClick={this.setFilter.bind(this, 'female')}>female</a>
        <a className="btn btn-default" onClick={this.setFilter.bind(this, 'child')}>child</a>
        <a className="btn btn-default" onClick={this.setFilter.bind(this, 'blonde')}>blonde</a>
       </div>
    }
  });
  
  var Kid = React.createClass({
    render: function() {
      return <ul>
        <li>{this.props.name}</li>
        </ul>
    }
  });
  
  var List = React.createClass({
    getInitialState: function() {
      return {
        filter: ''
      };
    },
    changeFilter: function(filter) {
      this.setState({
        filter: filter
      });
    },
    render: function() {
      var list = this.props.Data;
      
      if (this.state.filter !== '') {
        list = list.filter((i)=> i.tags.indexOf(this.state.filter) !== -1);
        console.log(list);
      } 
      
      list = list.map(function(Props){
        return <Kid {...Props} />
      });
  
      return <div>
        <h2>Kids Finder</h2>
        <Tags onChangeFilter={this.changeFilter}/>
        {list}
      </div>
    }
  });
  
  var options = {
    Data:  [{
      name: 'Eric Cartman',
      tags: ['male', 'child']
    },{
      name: 'Wendy Testaburger',
      tags: ['female', 'child']
    },{
      name: 'Randy Marsh',
      tags: ['male']
    },{
      name: 'Butters Stotch',
      tags: ['male', 'blonde', 'child']
    },{
      name: 'Bebe Stevens',
      tags: ['female', 'blonde', 'child']
    }]
  };
  
  var element = React.createElement(List, options);
  React.render(element, document.body);

  export default Filters;