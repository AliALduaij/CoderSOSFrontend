import React, { Component } from "react";
import { Form, Label, Input, Content, Item, Button, Text } from "native-base";
import projectStore from "../../Stores/ProjectStore";

class CreateProject extends Component {
  state = {
    title: "",
    detail: "",
    max_number: "",
    estimate_time: ""
  };
  render() {
    const { navigation } = this.props;
    return (
      <Content>
        <Form>
          <Label style={{ color: "black" }}>Project Title:</Label>
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
              onChangeText={title => this.setState({ title })}
            />
          </Item>

          <Label style={{ color: "black" }}>Details</Label>
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
              onChangeText={detail => this.setState({ detail })}
            />
          </Item>

          <Label style={{ color: "black" }}>Max Coders</Label>
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
              onChangeText={max_number => this.setState({ max_number })}
            />
          </Item>

          <Label style={{ color: "black" }}>Estimated Time</Label>
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
              onChangeText={estimate_time => this.setState({ estimate_time })}
            />
          </Item>
        </Form>
        <Button
          bordered
          success
          onPress={() => projectStore.createProject(this.state, navigation)}
        >
          <Text>Create</Text>
        </Button>
      </Content>
    );
  }
}

export default CreateProject;
