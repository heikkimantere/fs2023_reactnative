import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

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
    .max(30, "Username can't have more than 30 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must have at least 5 characters")
    .max(50, "Password can not have more than 50 characters")
    .required("Password is required"),
  passwordagain: yup
    .string()
    .oneOf(["123", yup.ref("password")], "Passwords do not match")
    .required("Password confirmation required"),
});

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const signUp = async (values) => {
    const { username, password } = values;
    const user = { username, password };
    try {
      await createUser({ variables: { user } });
      await signIn({ username, password });
      navigate("/");
    } catch (error) {
      console.log("err", error);
    }
  };

  const initialValues = {
    username: "",
    password: "",
    passwordagain: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={signUp}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikTextInput name="username" placeholder="username" />
          <FormikTextInput
            secureTextEntry={true}
            name="password"
            placeholder="password"
          />
          <FormikTextInput
            secureTextEntry={true}
            name="passwordagain"
            placeholder="password again"
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="white" fontWeight="bold">
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
