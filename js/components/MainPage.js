import React from 'react';
import _ from 'lodash';
import SearchInput from './SearchInput';
import ContactForm from './Form';
import Person from './Person';
import EditContact from './EditContact';
import ErrorModalDialog from './ErrorModalDialog'
import { connect } from 'react-redux'
import {addContactRequest, editContactRequest, deleteContactRequest, requestContacts} from '../actions/ContactActions.js'

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData,
        errorMessage: state.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (contactId) =>  {console.log('delete id', contactId); dispatch(deleteContactRequest(contactId))},
        addContact: (newContact) => {console.log('new contact', newContact);  dispatch(addContactRequest(newContact))},
        editContact: (newContactData) => dispatch(editContactRequest(newContactData)),
        requestContacts: () => dispatch(requestContacts())
    }
};

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
        const {deleteContact, addContact, editContact} = this.props;
        this.edit = (newContactData) => editContact(newContactData);
        this.add = (newContact) => addContact(newContact);
        this.delete = (id) => deleteContact(id);
    }

    filterData() {
        return _.filter(this.props.searchData, (word) => {
            return _.includes(word.name, this.state.keyword);
        });
    }

    searchChanged(keyword) {
        this.setState({keyword});
    }

    componentWillMount() {
        this.props.requestContacts();
    }

    render() {

        const filteredData = this.filterData();
        console.log('filteredData', filteredData);
        const result = filteredData.map((value) => {
            return (
                <div key={value.id}>
                  <Person value={value} deleteContact={() => this.delete(value.id)}/>
                  <EditContact editContact={this.edit} contact={value}/>
                </div>
            );
        });
console.log('filteredData', filteredData);
        return (
            <div>
              <ErrorModalDialog/>
              <SearchInput searchChanged={(keyword) => this.searchChanged(keyword)}/>
                {result}
              <ContactForm onFormSubmit={this.add} buttonName="Add" isEditMode={false}/>
            </div>
        );
    }
}

MainPage.propTypes = {
    searchData: React.PropTypes.array,
    requestContacts: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
