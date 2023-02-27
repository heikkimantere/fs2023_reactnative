import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const logIn = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log("data", data);
      navigate("/");
    } catch (error) {
      console.log("err", error);
    }
  };

  return <SignInForm onSubmit={logIn} />;
};

export default SignIn;
