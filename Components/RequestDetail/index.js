import React, { Component } from "react";

import projectStore from "../../Stores/ProjectStore";
import { Card, CardItem, Text, Button } from "native-base";

class RequestDetail extends Component {
  render() {
    const requestID = this.props.navigation.getParam("requestID");
    const request = projectStore.requests.find(
      requests => requests.id === requestID
    );

    return (
      <Card>
        <CardItem>
          <Text>Coder : {request.coder_profile}</Text>
        </CardItem>
        <CardItem>
          <Text>Project : {request.project}</Text>
        </CardItem>
        <CardItem>
          <Text>Message: {request.message}</Text>
        </CardItem>
        <Button bordered success>
          <Text>Accept</Text>
        </Button>
        <Button bordered danger>
          <Text>Decline</Text>
        </Button>
      </Card>
    );
  }
}

export default RequestDetail;
