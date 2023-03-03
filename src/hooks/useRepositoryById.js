import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepositoryById = ({ id, first }) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id, first },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first,
        id,
      },
    });
  };

  return {
    data,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepositoryById;
