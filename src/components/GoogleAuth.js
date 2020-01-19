import React from "react";

// window.gapi.auth2.getAuthInstance().signOut()  to sign out
// window.gapi.auth2.getAuthInstance().signIn()   to sign in

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return <button onClick={()=>this.auth.signOut()} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
      </button>;
    } else {
      return <button onClick={()=>this.auth.signIn()} className="ui red google button">
      <i className="google icon"></i>
      Sign In
  </button>;
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
