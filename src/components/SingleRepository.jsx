import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import useRepositoryById from "../hooks/useRepositoryById";
import RepositoryItem from "./RepositoryItem";
import Review from "./Review";

const SingleRepository = () => {
  const params = useParams();
  const id = params.id;

  const { data, fetchMore } = useRepositoryById({ id, first: 3 });

  if (!data?.repository) {
    return null;
  }

  const renderItem = (item) => {
    const review = item.item.node;
    return <Review review={review} type="repositoryReview" />;
  };

  return (
    <FlatList
      ListHeaderComponent={<RepositoryItem item={data.repository} showLink />}
      data={data.repository.reviews.edges}
      renderItem={renderItem}
      keyExtractor={(item) => item.node.id}
      contentContainerStyle={{ backgroundColor: "#eee", paddingBottom: 130 }}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.1}
    />
  );
};

export default SingleRepository;
