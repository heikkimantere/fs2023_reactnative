import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    margin: 5,
    marginBottom: 0,
    padding: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  rating: {
    width: 40,
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

const Review = ({ review }) => {
  const { rating, text, user, createdAt } = review;
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold">
          {rating}
        </Text>
      </View>
      <View style={styles.text}>
        <Text fontWeight="bold">{user.username}</Text>
        <Text style={{ marginVertical: 5 }}>{createdAt}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default Review;
