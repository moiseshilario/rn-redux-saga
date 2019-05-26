import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator, View, Text } from 'react-native';

import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

const Repositories = ({
  username, data, loading, error, loadRepositoriesRequest,
}) => {
  useEffect(() => {
    loadRepos();
  }, []);

  const loadRepos = () => {
    loadRepositoriesRequest(username);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {error && <Text>Error loading Repos</Text>}
      {loading ? <ActivityIndicator /> : data.map(repo => <Text key={repo.id}>{repo.name}</Text>)}
    </View>
  );
};

const mapStateToProps = state => ({
  data: state.repositories.data,
  username: state.login.username,
  error: state.repositories.error,
  loading: state.repositories.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
