import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "./queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  return { repositories: data?.repositories || null, loading };
};

export default useRepositories;
