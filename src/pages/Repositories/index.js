import React, { Component } from "react";

import {
  View,
  AsyncStorage,
  Text,
  ActivityIndicator,
  FlatList
} from "react-native";

import api from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import RepositoryItens from "./RepositoryItens";

import Header from "../../components/Header";

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem("@GitHuber:username");
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <RepositoryItens repository={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loadging } = this.state.loading;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loadging ? (
          <ActivityIndicator style={style.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

/*se fosse stelles seria:
Repositories.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list-alt" size={20} color={tintColor} />
  )
}*/
