import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: orderBy, orderDirection, searchKeyword },
    fetchPolicy: "cache-and-network",
  });
  return { repositories: data?.repositories || null, loading };
};

export default useRepositories;
