import React from 'react';
import { Menu, Modal, Header, Divider, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  nextPath = path => {
    const { history } = this.props;
    history.push(path);
  };

  handleSignupEvent = evt => {
    evt.preventDefault();
    this.close();
    this.nextPath('/signup');
  };

  handleLoginEvent = evt => {
    evt.preventDefault();
    this.close();
    this.nextPath('/login');
  };

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    const { activeItem } = this.props;
    return (
      <>
        <Menu.Item
          name="signup"
          active={activeItem === 'signup'}
          onClick={this.closeConfigShow(true, false)}
          animated
        />

        <Modal
          size="mini"
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          closeIcon
        >
          <Modal.Header className="custom-modal-header">
            <Header as="h1" textAlign="center">
              Sign Up
            </Header>
          </Modal.Header>
          <Modal.Content style={{ textAlign: 'center' }}>
            <Button
              color="google plus"
              style={{ margin: '20px' }}
              onClick={evt => this.handleSignupEvent(evt)}
            >
              <Icon name="google" /> Continue with Google
            </Button>

            <p>
              <Button className="link-button" onClick={evt => this.handleSignupEvent(evt)}>
                Or Sign Up with email
              </Button>
            </p>
            <Divider />

            <p>
              Already a member?
              <Button className="link-button" onClick={evt => this.handleLoginEvent(evt)}>
                &nbsp; Login instead.
              </Button>
            </p>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

SignupModal.propTypes = {
  activeItem: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SignupModal);
