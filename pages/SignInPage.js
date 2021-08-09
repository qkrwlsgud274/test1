import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default class JoinScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (text) => {
    this.setState({ email: text });
  };

  changePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Voice Translator</Text>

        <TextInput
          placeholder="email"
          style={styles.textinput}
          onChangeText={this.changeEmail}
          value={this.state.email}
        />
        <TextInput
          placeholder="password"
          style={styles.textinput}
          onChangeText={this.changePassword}
          value={this.state.password}
        />
        <Button
          title="로그인"
          style={styles.Button}
          onPress={() => alert(`${this.state.email}, ${this.state.password}`)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    margin: 30,
    fontSize: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  textinput: {
    backgroundColor: "#87ceeb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
});
