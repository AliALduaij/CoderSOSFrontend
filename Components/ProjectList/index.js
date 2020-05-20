import React, { Component } from "react";
import { Spinner, Content, List, Text, Button, Icon } from "native-base";
import { observer } from "mobx-react";

// stores
import projectStore from "../../Stores/ProjectStore";

// Components
import ProjectItem from "./ProjectItem";
import authStore from "../../Stores/AuthStore";

class ProjectList extends Component {
  render() {
    if (projectStore.loading) return <Spinner />;

    const { navigation } = this.props;

    const projects = projectStore.projects.map(project => (
      <ProjectItem project={project} key={project.id} />
    ));

    return (
      <Content>
        <List>{projects}</List>
      </Content>
    );
  }
}

ProjectList.navigationOptions = ({ navigation }) => ({
  title: "Projects",
  headerLeft: () => (
    <Button transparent onPress={() => navigation.navigate("CreateProject")}>
      <Text>Create Project</Text>
    </Button>
  ),

  headerRight: () => (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  )
});

export default observer(ProjectList);

// key={project.id} <-- i might need it for ProjectItem
