import React, { Component } from "react";
import { Spinner, Content, List, Text, Button, Icon } from "native-base";
import { observer } from "mobx-react";

// stores
import projectStore from "../../Stores/ProjectStore";

// Components
import MyRequestsItem from "./MyRequestsItem";
import authStore from "../../Stores/AuthStore";

class MyRequests extends Component {
  render() {
    if (projectStore.loadingR) return <Spinner />;

    const { navigation } = this.props;

    const myrequests = projectStore.myrequests.map(myrequest => (
      <MyRequestsItem myrequest={myrequest} key={myrequest.id} />
    ));

    return (
      <Content>
        <List>{myrequests}</List>
      </Content>
    );
  }
}

MyRequests.navigationOptions = ({ navigation }) => ({
  title: "My Requests",
  headerLeft: null,

  headerRight: (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  )
});

export default observer(MyRequests);
