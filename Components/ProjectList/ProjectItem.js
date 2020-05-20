import React, { Component } from "react";
import { Card, CardItem, Text, Button } from "native-base";
import { withNavigation } from "react-navigation";
import projectStore from "../../Stores/ProjectStore";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    handlePress = () => {
      this.props.navigation.navigate("ProjectDetail", {
        projectID: this.props.project.id
      });
    };

    return (
      <Card>
        <CardItem>
          <Text>TITLE :{project.title}</Text>
        </CardItem>
        <CardItem>
          <Text>CREATED ON :{project.created_on}</Text>
        </CardItem>
        <CardItem>
          <Text>USER :{project.coder}</Text>
        </CardItem>
        <Button bordered success onPress={handlePress}>
          <Text>More Details</Text>
        </Button>
      </Card>
    );
  }
}

export default withNavigation(ProjectItem);
