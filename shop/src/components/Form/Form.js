import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            errors:{name:''}
        }
    }


    render() {
        return (
            <div>
                <TextField 
                    id="standart-name"
                    label="Введите имя"
                    margin="normal"
                    value={this.state.name}
                    fullWidth={true}
                    errorText={this.state.errors.name}
                    onChange={ (event, name) => this.setState({ name: event.target.value })}
                />
                <TextField 
                    id="standart-name"
                    label="Введите описание"
                    margin="normal"
                    value={this.state.description}
                    fullWidth={true}
                    errorText={this.state.errors.description}
                    onChange={ (event, description) => this.setState({ description: event.target.value })}
                />
                <Button variant="contained" color="secondary" secondary={true} onClick={this.onAdd.bind(this)}>
                Добавить
                </Button>
           </div>)
    }
        
        onAdd() {
            let errors = {}

            if (!this.state.name) errors.name = 'Имя не может быть пустым'
            if (!this.state.description) errors.description = 'Описание не может быть пустым'

            if (errors.name || errors.description) {
                this.setState({ errors })
                return
            }
            this.props.onAdd({
                name: this.state.name,
                description: this.state.description,
                checked: false
            })

            this.setState({ name: '', description: '', errors: {
                name: '', description: ''
            }})
        }
    }


export default Form;