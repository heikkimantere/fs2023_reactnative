import { Alert, Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import format from "date-fns/format";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    margin: 5,
    marginBottom: 0,
  },
  reviewPart: {
    borderRadius: 3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
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
  buttons: {
    flexDirection: "row",
    paddingTop: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: "orange",
    borderRadius: 4,
    alignItems: "center",
  },
  view: {
    marginRight: 5,
    backgroundColor: theme.colors.primary,
  },
  delete: {
    marginLeft: 5,
    backgroundColor: "#d42",
  },
});

const Review = ({ review, type }) => {
  const { rating, text, user, createdAt } = review;
  const navigate = useNavigate();
  const goToRepo = () => navigate(`/${review.repository.id}`);

  const [removeReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {
        query: ME,
        variables: {
          includeReviews: true,
        },
      },
    ],
  });

  const onPressDelete = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteReview() },
      ]
    );

  const deleteReview = async () => {
    try {
      console.log("remove...", review.repository.id);
      await removeReview({ variables: { deleteReviewId: review.id } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewPart}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold">
            {rating}
          </Text>
        </View>
        <View style={styles.text}>
          <Text fontWeight="bold">
            {type === "repositoryReview" && user?.username}
            {type === "myReview" && review.repository.fullName}
          </Text>
          <Text style={{ marginVertical: 5 }}>
            {format(new Date(createdAt), "d.M.yyyy")}
          </Text>
          <Text>{text}</Text>
        </View>
      </View>

      {type == "myReview" && (
        <View style={styles.buttons}>
          <Pressable style={[styles.button, styles.view]} onPress={goToRepo}>
            <Text color="white" fontWeight="bold">
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.delete]}
            onPress={onPressDelete}
          >
            <Text color="white" fontWeight="bold">
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Review;
