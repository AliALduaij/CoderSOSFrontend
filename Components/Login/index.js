import React, { Component } from "react";
import { Form, Label, Input, Content, Item, Button, Text } from "native-base";

import authStore from "../../Stores/AuthStore";
import { observer } from "mobx-react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { navigation } = this.props;
    return (
      <Content>
        <Form>
          <Label style={{ color: "black" }}>Username:</Label>
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
              onChangeText={username => this.setState({ username })}
            />
          </Item>

          <Label style={{ color: "black" }}>Password</Label>
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
              onChangeText={password => this.setState({ password })}
            />
          </Item>
        </Form>
        <Button
          bordered
          success
          onPress={() => authStore.login(this.state, navigation)}
        >
          <Text>Login</Text>
        </Button>
        <Button
          bordered
          success
          onPress={() => authStore.signup(this.state, navigation)}
        >
          <Text>Sign Up</Text>
        </Button>
      </Content>
    );
  }
}

export default observer(Login);
