import React from 'react';
import {createStore} from 'redux'

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit({name: this.name.value, birthday: this.birthday.value})
    }

    render() {
        const isEditMode = this.props.buttonName === 'Edit';
        const model = isEditMode ? this.props.person : {name: '', birthday: ''}

        console.log('isEditMode', isEditMode, this.props.person);
        return (
            <div>
                <input type="text" defaultValue={isEditMode ? this.props.person.name : ""}
                       ref={(name) => {
                           this.name = name
                       }}/>
                <input type="text" defaultValue={isEditMode ? this.props.person.birthday : ""}
                       ref={(birthday) => {
                           this.birthday = birthday
                       }}/>
                <button onClick={this.onSubmit.bind(this)}>
                    {this.props.buttonName}
                </button>
            </div>
        );
    }
}

Form.propTypes = {
    onFormSubmit: React.PropTypes.func
}

export default Form;
