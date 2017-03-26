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

class EditPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    editPerson(person) {
        this.props.editPerson(person);
        this.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal.bind(this)}>edit</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Edit person">

                    <div>
                        <h2 ref="subtitle" style={customStyles.title}>Edit person</h2>
                        {<button onClick={this.closeModal.bind(this)}>X</button>}
                    </div>
                    <div>
                        <br/>
                        <label>Name</label>
                        <label style={customStyles.label}>Birthday</label>
                    </div>
                    <br/>
                    <form>
                        <br/>
                        <Form onFormSubmit={this.editPerson.bind(this)} buttonName="Edit" person={this.props.person}/>

                    </form>
                </Modal>
            </div>
        );
    }
}


export default EditPerson;
