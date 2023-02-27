import { StyleSheet, ScrollView, View, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useAuthStorage } from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
  },
  navBar: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  link: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const me = data?.me;
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.navBar} horizontal={true}>
        <Link style={styles.link} to="/">
          <Text color="white" fontWeight="bold">
            Repositories
          </Text>
        </Link>
        {me?.id ? (
          <Pressable style={styles.link} onPress={signOut}>
            <Text color="white" fontWeight="bold" numberOfLines={1}>
              Sign out {me.username}
            </Text>
          </Pressable>
        ) : (
          <Link style={styles.link} to="/signin">
            <Text color="white" fontWeight="bold">
              Sign in
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
