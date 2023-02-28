import { useQuery } from "@apollo/client";
import { Linking, Pressable, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Repository = () => {
  const params = useParams();
  const id = params.id;

  const { data } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id },
  });

  if (!data?.repository) {
    return null;
  }

  const openLink = () => Linking.openURL(data.repository.url);

  return (
    <View style={styles.singleRepo} testID="repository">
      <RepositoryItem item={data.repository} />
      <Pressable style={styles.button} onPress={openLink}>
        <Text color="white" fontWeight="bold">
          Open in GitHub {data.url}
        </Text>
      </Pressable>
    </View>
  );
};

export default Repository;

export const formatToKilos = (count) => {
  if (count < 1000) {
    return count;
  }
  return `${Math.round(count / 100) / 10}k`;
};
