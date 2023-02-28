import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      contentContainerStyle={{ backgroundColor: "#eee" }}
    />
  );
};

export default RepositoryListContainer;
