import { useState } from "react";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [order, setOrder] = useState("newest");
  const [keyword, setKeyword] = useState("");
  const orderBy = order === "newest" ? "CREATED_AT" : "RATING_AVERAGE";
  const orderDirection = order === "lowestRating" ? "ASC" : "DESC";
  const [searchKeyword] = useDebounce(keyword, 500);
  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
  });

  const onChangeSearch = (value) => setKeyword(value);

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      onChangeSearch={onChangeSearch}
      searchKeyword={keyword}
    />
  );
};

export default RepositoryList;
