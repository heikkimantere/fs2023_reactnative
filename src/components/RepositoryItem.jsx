import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 3,
    margin: 6,
    marginBottom: 0,
    backgroundColor: "white",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
    padding: 10,
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  language: {
    color: "white",
  },
  figures: {
    alignItems: "center",
    height: 40,
    justifyContent: "space-between",
  },
  titleRow: {
    flex: 1,
  },
  description: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.row}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.titleRow}>
          <Text fontWeight="bold" testID="fullName">{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>Language: {item.language}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.row, styles.spaceEvenly]}>
        <View style={styles.figures}>
          <Text fontWeight="bold">{formatToKilos(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.figures}>
          <Text fontWeight="bold">{formatToKilos(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.figures}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.figures}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;

const formatToKilos = (count) => {
  if (count < 1000) {
    return count;
  }
  return `${Math.round(count / 100) / 10}k`;
};
