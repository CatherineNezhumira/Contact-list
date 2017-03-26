import React from 'react';
import _ from 'lodash';
import SearchInput from './SearchInput';
import PersonForm from './Form';
import Person from './Person';
import EditPerson from './EditPerson';
import { connect } from 'react-redux'
import {addPerson, editPerson, deletePerson} from '../actions/PersonActions.js'

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePerson: (personId) => dispatch(deletePerson(personId)),
        addPerson: (newPerson) => dispatch(addPerson(newPerson)),
        editPerson: (personId, newPersonData) => dispatch(editPerson(personId, newPersonData))
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
        console.log('filter');
        return _.filter(this.props.searchData, (word) => {
            return _.includes(word.name, this.state.keyword);
        });
    }

    searchChanged(keyword) {
        this.setState({keyword})
    }

    render() {
        const {deletePerson, addPerson, editPerson} = this.props;
        const filteredData = this.filterData();
        const result = filteredData.map((value) => {
            return (
                <div key={value.id}>
                  <Person value={value} deletePerson={() => deletePerson(value.id)}/>
                  <EditPerson editPerson={(newPersonData) => editPerson(value.id, newPersonData)} person={value}/>
                </div>
            );
        });

        return (
            <div>
              <SearchInput searchChanged={(keyword) => this.searchChanged(keyword)}/>
                {result}
              <PersonForm onFormSubmit={(newPerson) => addPerson(newPerson)} buttonName="Add"/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
