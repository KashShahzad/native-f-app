import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //to set the input and empty it after that
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="enter your goals"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.button}><Button title="Add" onPress={addGoalHandler} /></View>
      <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel} /></View>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "40%",
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
