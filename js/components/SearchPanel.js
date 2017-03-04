import _ from 'lodash';
import React from 'react';
import SearchInput from './SearchInput';
import PersonForm from './Form';
import Person from './Person';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: [{name: 'Mike', birthday: '1993-12-15'},
                {name: 'Kate', birthday: '1994-12-06'},
                {name: 'Jery', birthday: '2015-04-01'},
                {name: 'Mike', birthday: '1998-03-12'}],
            keyword: ''
        }
    }

    filterData() {
        return _.filter(this.state.searchData, (word) => {
            return _.includes(word.name, this.state.keyword);
        })
    }

    keywordChanged(value) {
        this.setState({keyword: value});
    }

    searchDataChanged(person) {
        this.setState( (prevState) => {
            const searchData = Array.from(prevState.searchData.concat([person]))
            return {searchData: searchData}
        });
    }

    deletePerson(index) {
        this.setState((prevState) => {
            prevState.searchData.splice(index, 1)
            return {searchData: Array.from(prevState.searchData)}
        })
    }


    render() {
        const data = this.filterData();
        const result = data.map((value, index) => {
            return (
                <Person key={index} value={value} deletePerson={this.deletePerson.bind(this, index)}/>
            );
        });
        return (
            <div>
                <SearchInput onChange={this.keywordChanged.bind(this)}/>
                {result}
                <PersonForm addPerson={this.searchDataChanged.bind(this)}/>
            </div>
        );
    }
}

export default SearchPanel;
