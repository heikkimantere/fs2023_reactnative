import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import Review from "./Review";

const SingleRepository = () => {
  const params = useParams();
  const id = params.id;

  const { data } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (!data?.repository) {
    return null;
  }

  const renderItem = (item) => {
    const review = item.item.node;
    return <Review review={review} />;
  };

  return (
    <FlatList
      ListHeaderComponent={<RepositoryItem item={data.repository} showLink />}
      data={data.repository.reviews.edges}
      renderItem={renderItem}
      contentContainerStyle={{ backgroundColor: "#eee", paddingBottom: 130 }}
    />
  );
};

export default SingleRepository;
