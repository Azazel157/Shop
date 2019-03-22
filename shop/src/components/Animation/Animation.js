import React from 'react';
import styled from 'styled-components';

const ReactCSSTransitionGroup = styled.div `
    ReactCSSTransitionGroup.example-enter {
    opacity: 0.01;
   }
   ReactCSSTransitionGroup.example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
   }
   ReactCSSTransitionGroup.example-leave {
    opacity: 1;
   }
   ReactCSSTransitionGroup.example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
   }
`

class Animation extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
           items: ['Первый', 'Второй', 'Третий']
        }
        this.handleAdd2 = this.handleAdd2.bind(this);
     };

     handleAdd2() {
        var newItems = this.state.items.concat([prompt('Добавление нового элемента')]);
        this.setState({items: newItems});
     }

     handleRemove(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
     }

    render() {
        var itemsList = this.state.items.map(function(item, i) {
            return (
               <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
                  {item}
               </div>
            );
         }.bind(this));

       return (
          <div>
            <button onClick = {this.handleAdd2}>Добавить</button>
            <ReactCSSTransitionGroup className = "example"
                transitionAppear = {true} transitionAppearTimeout = {500}
                transitionEnter = {false} transitionLeave = {false}>
                {itemsList}
            </ReactCSSTransitionGroup>
          </div>      
       );
    }
 }
 export default Animation;