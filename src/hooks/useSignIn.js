import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: { username, password },
      },
    });
    if (response.data?.authenticate?.accessToken) {
      const token = response.data.authenticate.accessToken;
      await authStorage.setAccessToken(token);
    }
    apolloClient.resetStore();
    return response;
  };
  return [signIn, result];
};

export default useSignIn;
