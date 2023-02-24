import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must have at least 2 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .required("Password is required"),
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
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikTextInput name="username" placeholder="Name" />
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
