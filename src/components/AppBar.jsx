import { StyleSheet, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
  },
  navBar: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
  },
  link: {
    padding: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.navBar} horizontal={true}>
        <Link style={styles.link} to="/">
          <Text color="white" fontWeight="bold">
            Repositories
          </Text>
        </Link>
        <Link style={styles.link} to="/signin">
          <Text color="white" fontWeight="bold">
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
