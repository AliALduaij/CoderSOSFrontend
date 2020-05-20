import React, { Component } from "react";

import projectStore from "../../Stores/ProjectStore";
import { Card, CardItem, Text, Button } from "native-base";

class ProjectDetail extends Component {
  render() {
    const projectID = this.props.navigation.getParam("projectID");
    const project = projectStore.projects.find(
      projects => projects.id === projectID
    );
    handlePress = () => {
      this.props.navigation.navigate("CreateRequest", {
        projectID: project.id
      });
    };
    return (
      <Card>
        <CardItem>
          <Text>Title : {project.title}</Text>
        </CardItem>
        <CardItem>
          <Text>Details : {project.detail}</Text>
        </CardItem>
        <CardItem>
          <Text>Max Number Of Coders : {project.max_number}</Text>
        </CardItem>
        <CardItem>
          <Text>Estimated Time : {project.estimate_time}</Text>
        </CardItem>
        <CardItem>
          <Text>Posted By : {project.coder}</Text>
        </CardItem>
        <CardItem>
          <Text>Created On : {project.created_on}</Text>
        </CardItem>
        <Button bordered success onPress={handlePress}>
          <Text>Join</Text>
        </Button>
      </Card>
    );
  }
}

export default ProjectDetail;
