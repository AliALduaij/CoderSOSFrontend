import React, { Component } from "react";
import { Card, CardItem, Text, Button } from "native-base";
import { withNavigation } from "react-navigation";

import projectStore from "../../Stores/ProjectStore";

class ProjectRequestsItem extends Component {
  state = {
    projectId: "",
    status: ""
  };
  render() {
    const { request } = this.props;

    handleAccept = async () => {
      await this.setState({ projectId: request.id });
      await this.setState({ status: "Accepted" });
      projectStore.updateStatus(this.state.projectId, this.state.status);
    };
    handleReject = async () => {
      await this.setState({ projectId: request.id });
      await this.setState({ status: "Declined" });
      projectStore.updateStatus(this.state.projectId, this.state.status);
    };

    return (
      <Card>
        <CardItem>
          <Text>{request.coder_profile}</Text>
        </CardItem>
        <CardItem>
          <Text>{request.message}</Text>
        </CardItem>

        <Button bordered success onPress={handleAccept}>
          <Text>Accept</Text>
        </Button>
        <Button bordered danger onPress={handleReject}>
          <Text>Decline</Text>
        </Button>
      </Card>
    );
  }
}

export default withNavigation(ProjectRequestsItem);
