import React from 'react';
import Modal from 'react-modal';
import {clearErrorMessage} from '../actions/ErrorActions'
import { connect } from 'react-redux'

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
        marginRight: '15%',
        float: 'left',
        marginBottom: '0%'
    },
    label: {
        marginLeft: '35%'
    }
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearMessage: () => dispatch(clearErrorMessage())
    }
};

class ErrorModalDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    closeModal() {
        this.props.clearMessage();
        this.setState({modalIsOpen: false});
    }

    render() {
        const {clearMessage} = this.props;
        return (
            <div>
                <Modal
                    isOpen={this.props.errorMessage.length > 0}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Error">

                    <div>
                        <h2 ref="subtitle" style={customStyles.title}>Error :(</h2>
                        {<button onClick={this.closeModal.bind(this)}>X</button>}
                    </div>
                    <div>
                        <br/>
                        <label>{this.props.errorMessage}</label>
                    </div>
                    <br/>
                </Modal>
            </div>
        );
    }
}

ErrorModalDialog.propTypes = {
    errorMessage: React.PropTypes.string,
    clearMessage: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModalDialog);
