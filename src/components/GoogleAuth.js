import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

// window.gapi.auth2.getAuthInstance().signOut()  to sign out
// window.gapi.auth2.getAuthInstance().signIn()   to sign in

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "533151601890-v71cgu2p87f0cfosmutsuauqb48iq87i.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signOut()}
          className="ui red google button"
        >
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => this.auth.signIn()}
          className="ui red google button"
        >
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
