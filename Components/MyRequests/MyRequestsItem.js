import React, { Component } from "react";
import { Card, CardItem, Text, Button } from "native-base";
import { withNavigation } from "react-navigation";

import projectStore from "../../Stores/ProjectStore";

class MyRequestsItem extends Component {
  state = {};
  render() {
    const { myrequest } = this.props;

    return (
      <Card>
        <CardItem>
          <Text>Project: {myrequest.project}</Text>
        </CardItem>
        <CardItem>
          <Text>STATUS: {myrequest.status}</Text>
        </CardItem>
        <CardItem>
          <Text>MESSAGE: {myrequest.message}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(MyRequestsItem);
