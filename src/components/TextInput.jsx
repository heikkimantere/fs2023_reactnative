import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
