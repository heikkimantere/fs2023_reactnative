import { useState } from "react";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [order, setOrder] = useState("newest");
  const orderBy = order === "newest" ? "CREATED_AT" : "RATING_AVERAGE";
  const orderDirection = order === "lowestRating" ? "ASC" : "DESC";
  const { repositories } = useRepositories(orderBy, orderDirection);
  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    />
  );
};

export default RepositoryList;
