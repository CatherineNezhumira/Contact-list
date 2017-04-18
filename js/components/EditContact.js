import React from 'react';
import Modal from 'react-modal';
import Form from './Form';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        marginTop: '0%',
        width: '65%',
        marginRight: '20%',
        float: 'left',
        marginBottom: '0%'
    },
    label: {
        marginLeft: '35%'
    }
};

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModalWindow = this.openModal.bind(this);
        this.closeModalWindow = this.closeModal.bind(this);
        this.submitForm = this.editContact.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    editContact(contact) {
        this.props.editContact(contact);
        this.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.openModalWindow}>edit</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Edit contact">

                    <div>
                        <h2 ref="subtitle" style={customStyles.title}>Edit contact</h2>
                        {<button onClick={this.closeModalWindow}>X</button>}
                    </div>
                    <div>
                        <br/>
                        <label>Name</label>
                        <label style={customStyles.label}>Birthday</label>
                    </div>
                    <br/>
                    <form>
                        <br/>
                        <Form onFormSubmit={this.submitForm} buttonName="Edit" contact={this.props.contact} isEditMode={true}/>

                    </form>
                </Modal>
            </div>
        );
    }
}


Form.propTypes = {
    contact: React.PropTypes.object,
    editContact: React.PropTypes.func
};

export default EditContact;
