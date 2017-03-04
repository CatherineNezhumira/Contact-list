import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue="" ref={(input) => this.input = input}/>
                <button onClick={() => this.props.onChange(this.input.value)}>filter</button>
            </div>
        );
    }
}

SearchInput.propTypes = {
    onChange: SearchInput.PropTypes.func
}

export default SearchInput;