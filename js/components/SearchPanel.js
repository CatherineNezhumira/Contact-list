import React from 'react';
import _ from 'lodash';
import SearchInput from './SearchInput';
import ContactForm from './Form';
import Person from './Person';
import EditContact from './EditContact';
import { connect } from 'react-redux'
import {addContact, editContact, deleteContact, requestContacts} from '../actions/ContactActions.js'

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (contactId) => dispatch(deleteContact(contactId)),
        addContact: (newContact) => dispatch(addContact(newContact)),
        editContact: (newContactData) => dispatch(editContact(newContactData)),
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
              <SearchInput searchChanged={(keyword) => this.searchChanged(keyword)}/>
                {result}
              <ContactForm onFormSubmit={(newContact) => addContact(newContact)} buttonName="Add"/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
