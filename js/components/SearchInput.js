import React from 'react';
import { createStore } from 'redux'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue="" ref={(input) => this.input = input}/>
                <button onClick={() => this.props.searchChanged(this.input.value)}>filter</button>
            </div>
        );
    }
}

SearchInput.propTypes = {
    searchChanged: React.PropTypes.func
};

export default SearchInput;