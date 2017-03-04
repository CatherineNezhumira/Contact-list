import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <input type="text" defaultValue="" ref={(name) => {this.name = name}}/>
                <input type="text" defaultValue="" ref={(birthday) => {this.birthday = birthday}}/>
                <button onClick={() => this.props.addPerson({name: this.name.value, birthday: this.birthday.value})}>add</button>
            </div>
        );
    }
}

Form.propTypes = {
    addPerson: React.PropTypes.func
}

export default Form;
