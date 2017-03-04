import React from 'react';

function Person(props) {
    return (
        <div>
            <div>
                <h1>{`${props.value.name}`}</h1>
                <h4>{`${props.value.birthday}`}</h4>
            </div>
            <button onClick={props.deletePerson}>delete</button>
        </div>
    );
}

Person.propTypes = {
    value: Person.PropTypes.object,
    deletePerson: Person.PropTypes.func
}

export default Person;