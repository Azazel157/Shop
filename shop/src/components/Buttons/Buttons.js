import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const ButtonBase = styled.div`
   display: flex;
   justify-content: flex-start;

   button.one {
       margin: 0 50px;
       color: Black;
   }
   
   button.one:hover {
       box-shadow: 0 4px #990000;
       transition: 0.7s;
    }
`
const Buttons = (props) => {
    return (
        <div>
            <ButtonBase>
                <Button 
                   color="primary" 
                   className="one" 
                   onClick={ (event) => props.onAdd(event.currentTarget) }
                >
                Добавить
                </Button>
                <Button 
                   color="primary" 
                   className="one" 
                   onClick={ () => props.onDelete()}
                   disabled={!props.itemsChecked}
                   >
                   Удалить 
                </Button>
            </ButtonBase>
        </div>
    )
}

export default Buttons;