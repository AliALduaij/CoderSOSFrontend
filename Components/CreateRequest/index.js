import React, { Component } from "react";
import { Content, Form, Label, Item, Input, Button, Text } from "native-base";
import projectStore from "../../Stores/ProjectStore";
import { withNavigation } from "react-navigation";

class CreateRequest extends Component {
  state = {
    message: "",
    project: ""
  };
  render() {
    const { navigation } = this.props;
    const projectID = this.props.navigation.getParam("projectID");

    handlePress = async () => {
      await this.setState({ project: projectID });
      projectStore.createRequest(this.state, navigation);
    };
    return (
      <Content>
        <Form>
          <Label style={{ color: "black" }}>Message: </Label>
          <Item
            rounded
            style={{
              backgroundColor: "white",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={message => this.setState({ message })}
            />
          </Item>
        </Form>
        <Button bordered success onPress={handlePress}>
          <Text>Request To Join</Text>
        </Button>
      </Content>
    );
  }
}

export default withNavigation(CreateRequest);
