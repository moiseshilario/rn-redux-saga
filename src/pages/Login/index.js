import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator } from 'react-native';

import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

import { Creators as LoginCreators } from '~/store/ducks/login';

const Login = ({ loading, error, loginRequest }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async () => {
    loginRequest(username);
  };

  return (
    <Container>
      {error && <Error>User not found</Error>}
      <Input
        value={username}
        onChangeText={text => setUsername(text)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
      />
      <Button onPress={handleSubmit}>
        {loading ? <ActivityIndicator /> : <ButtonText>Sign in</ButtonText>}
      </Button>
    </Container>
  );
};

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
