import React, { Component } from "react";
import { Card, CardItem, Text, Button } from "native-base";
import { withNavigation } from "react-navigation";
import projectStore from "../../Stores/ProjectStore";

class MyProjectsItem extends Component {
  render() {
    const { myproject } = this.props;

    handlePress = () => {
      this.props.navigation.navigate("ProjectRequestsList", {
        projectID: this.props.myproject.id
      });
    };

    return (
      <Card>
        <CardItem>
          <Text>TITLE: {myproject.title}</Text>
        </CardItem>
        <CardItem>
          <Text>CREATED ON :{myproject.created_on}</Text>
        </CardItem>
        <CardItem>
          <Text>DETAILS :{myproject.detail}</Text>
        </CardItem>

        <Button bordered success onPress={handlePress}>
          <Text>Requests</Text>
        </Button>
        <Button
          bordered
          danger
          onPress={() => projectStore.deleteProject(myproject.id)}
        >
          <Text>Delete</Text>
        </Button>
      </Card>
    );
  }
}

export default withNavigation(MyProjectsItem);
