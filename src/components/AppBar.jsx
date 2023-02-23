import { StyleSheet, Pressable, View } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 15,
    paddingLeft: 15,
    flex: 1,
    alignSelf: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const AppBar = () => {
  return (
    <View style={styles.navBar}>
      <Link style={styles.container} to="/">
        <Text color="white" fontWeight="bold">
          Repositories
        </Text>
      </Link>
      <Link style={styles.container} to="/signin">
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Link>
    </View>
  );
};

export default AppBar;
