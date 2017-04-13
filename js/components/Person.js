import React from 'react';

function Contact(props) {
    return (
        <div>
            <div>
                <h1>{`${props.value.name}`}</h1>
                <h4>{`${props.value.birthday}`}</h4>
            </div>
            <button onClick={props.deleteContact}>delete</button>
        </div>
    );
}

Contact.propTypes = {
    value: React.PropTypes.object
};

export default Contact;