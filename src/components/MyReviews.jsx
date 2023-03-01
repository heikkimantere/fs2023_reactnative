import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { ME } from "../graphql/queries";
import Review from "./Review";

const MyReviews = () => {
  const { data } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
  });

  const renderItem = (item) => {
    const review = item.item.node;
    return <Review review={review} type="myReview" />;
  };

  if (!data?.me) {
    return null;
  }
  return (
    <FlatList
      data={data.me.reviews.edges}
      renderItem={renderItem}
      keyExtractor={(item) => item.node.id}
      contentContainerStyle={{ backgroundColor: "#eee", paddingBottom: 130 }}
    />
  );
};

export default MyReviews;
