import React from 'react';
import {createStore} from 'redux'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const contactId = this.props.contact ? this.props.contact.id : undefined;
        this.props.onFormSubmit({id: contactId, name: this.name.value, birthday: this.birthday.value});
    }

    render() {
        console.log(this.props.isEditMode, this.props.contact);
        return (
            <div>
                <input type="text" defaultValue={this.props.isEditMode ? this.props.contact.name : ""}
                       ref={(name) => {
                           this.name = name
                       }}/>
                <input type="text" defaultValue={this.props.isEditMode ? this.props.contact.birthday : ""}
                       ref={(birthday) => {
                           this.birthday = birthday
                       }}/>
                <button onClick={this.submitForm}>
                    {this.props.buttonName}
                </button>
            </div>
        );
    }
}

Form.propTypes = {
    contact: React.PropTypes.object,
    buttonName: React.PropTypes.string,
    onFormSubmit: React.PropTypes.func,
    isEditMode: React.PropTypes.bool
};

export default Form;
