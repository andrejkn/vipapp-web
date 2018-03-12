import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

// TODO: will call an action from this response function
// in order to send the used data to the back-end
const responseFacebook = (response) => {
  console.log('response');
  console.log(response);
};

// TODO: handle onClick event
const _handleLogInClick = (e) => {
  console.log(e);
};

const LogIn = (props) => (
  <div>
    Log In:
    <FacebookLogin
      appId="445977072485191"
      autoLoad={true}
      fields="gender,name,first_name,last_name,email,picture"
      onClick={componentClicked}
      callback={_handleLogInClick}
      icon="fa-facebook"
    />
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  // setBrightness: (value) => setBrightness(value)
}, dispatch);

const mapStateToProps = (state) => ({
  // brightness: getBrightness(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);