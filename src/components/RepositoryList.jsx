import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 0,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      contentContainerStyle={{ backgroundColor: "#eee" }}
    />
  );
};

export default RepositoryList;
