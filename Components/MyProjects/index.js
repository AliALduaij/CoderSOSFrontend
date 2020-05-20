import React, { Component } from "react";
import { Spinner, Content, List, Text, Button, Icon } from "native-base";
import { observer } from "mobx-react";

// stores
import projectStore from "../../Stores/ProjectStore";

// Components
import MyProjectItem from "./MyProjectsItem";
import authStore from "../../Stores/AuthStore";

class MyProjects extends Component {
  render() {
    if (projectStore.loadingR) return <Spinner />;

    const { navigation } = this.props;

    const myprojects = projectStore.myprojects.map(myproject => (
      <MyProjectItem myproject={myproject} key={myproject.id} />
    ));

    return (
      <Content>
        <List>{myprojects}</List>
      </Content>
    );
  }
}

MyProjects.navigationOptions = ({ navigation }) => ({
  title: "My Projects",
  headerLeft: () => null,

  headerRight: () => (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  )
});

export default observer(MyProjects);
