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
        deleteContact: (contactId) => dispatch(deleteContactRequest(contactId)),
        addContact: (newContact) => dispatch(addContactRequest(newContact)),
        editContact: (newContactData) => dispatch(editContactRequest(newContactData)),
        requestContacts: () => dispatch(requestContacts())
    }
};

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
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
        const {deleteContact, addContact, editContact} = this.props;
        const filteredData = this.filterData();
        const result = filteredData.map((value) => {
            return (
                <div key={value.id}>
                  <Person value={value} deleteContact={() => deleteContact(value.id)}/>
                  <EditContact editContact={(newContactData) => editContact(newContactData)} contact={value}/>
                </div>
            );
        });

        return (
            <div>
              <ErrorModalDialog/>
              <SearchInput searchChanged={(keyword) => this.searchChanged(keyword)}/>
                {result}
              <ContactForm onFormSubmit={(newContact) => addContact(newContact)} buttonName="Add"/>
            </div>
        );
    }
}

SearchPanel.propTypes = {
    searchData: React.PropTypes.array,
    requestContacts: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
