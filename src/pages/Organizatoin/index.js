import React, { Component } from "react";

import { View, AsyncStorage, FlatList, ActivityIndicator } from "react-native";

import api from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import OrganizationItens from "./OrganizationItens";

import Header from "../../components/Header";

export default class Organization extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    )
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  async componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem("@GitHuber:username");
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <OrganizationItens organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    const { loadging } = this.state.loading;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loadging ? (
          <ActivityIndicator style={style.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
