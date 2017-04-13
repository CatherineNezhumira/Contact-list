import React from 'react';
import {createStore} from 'redux'

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        const contactId = this.props.contact ? this.props.contact.id : undefined;
        this.props.onFormSubmit({id: contactId, name: this.name.value, birthday: this.birthday.value});
    }

    render() {
        const isEditMode = this.props.buttonName === 'Edit';
        console.log('isEditMode', isEditMode, this.props.contact);
        return (
            <div>
                <input type="text" defaultValue={isEditMode ? this.props.contact.name : ""}
                       ref={(name) => {
                           this.name = name
                       }}/>
                <input type="text" defaultValue={isEditMode ? this.props.contact.birthday : ""}
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
};

export default Form;
