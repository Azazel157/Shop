import React from 'react';
import Header from './components/Header/Header';
import Buttons from './components/Buttons/Buttons';
import Select from './components/List/Select';
import { Popover } from '@material-ui/core';
import Form from './components/Form/Form';
import Animation from './components/Animation/Animation';

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      isPopoverOpen: false,
      popoverElement: null,
      itemsList: [
        {name: 'iPhone', description: 'Описание 1', checked: false},
        {name: 'Samsung', description: 'Описание 2', checked: false},
        {name: 'Nokia', description: 'Описание 3', checked: false},
        {name: 'Siemens', description: 'Описание 4', checked: false}
      ]
    }
  }
  
  onAdd = (item) => {
    let itemsList = [...this.state.itemsList];
    itemsList.push(item)
    this.setState({ itemsList, isPopoverOpen: false })
  };

  render() {
      return(
          <div>
            <Header />
            <div className="container">
            <Buttons
            itemsChecked={this.state.itemsList.some(i => i.checked)}
            onDelete={ () => {
              let itemsList = this.state.itemsList.filter(i => !i.checked)
              this.setState({ itemsList })
            }}
            onAdd={ (popoverElement) => { this.setState({popoverElement, isPopoverOpen: true }) }}
            />
            <Popover
            open={this.state.isPopoverOpen}
            anchorEl={this.state.popoverElement}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={ () => this.setState( {isPopoverOpen: false}) }
            style={{ width: 1000, padding: '15px 30px'}}
            >
            <Form 
            onAdd={this.onAdd}
            />
            </Popover>
            <Select 
            items={this.state.itemsList}
            onChange={ (checked, idx) => {
              let {itemsList} = this.state
              itemsList[idx].checked = checked
              this.setState({ itemsList })
            }}
            />
            <Animation />
            </div>
          </div>
      );
  }
}

export default App;