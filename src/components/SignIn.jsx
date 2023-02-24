import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
  form: {
    padding: 10,
  },
});

const SignIn = () => {
  const logIn = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={logIn}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikTextInput name="name" placeholder="Name" />
          <FormikTextInput
            name="password"
            placeholder="password"
            secureTextEntry={true}
          />
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text color="white" fontWeight="bold">
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
