import { FlatList, Pressable, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { Menu, Provider, Searchbar } from "react-native-paper";
import Text from "./Text";
import { useState } from "react";

const RepositoryListContainer = ({
  repositories,
  order,
  setOrder,
  onChangeSearch,
  keyword,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <SelectOrder
            order={order}
            setOrder={setOrder}
            onChangeSearch={onChangeSearch}
            keyword={keyword}
          />
        }
        ListHeaderComponentStyle={{ zIndex: 100 }}
        contentContainerStyle={{ backgroundColor: "#eee", paddingBottom: 150 }}
      />
    </View>
  );
};

const SelectOrder = ({ setOrder, order, onChangeSearch, keyword }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectOrder = (value) => {
    setOrder(value);
    closeMenu();
  };

  const orderText = (order) => {
    switch (order) {
      case "newest":
        return "Latest";
      case "highestRating":
        return "Highest rating";
      case "lowestRating":
        return "Lowest rating";
    }
  };

  return (
    <Provider>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={keyword}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{ top: 50 }}
        anchor={
          <Pressable
            onPress={openMenu}
            style={{
              padding: 15,
            }}
          >
            <Text>Sort by: {orderText(order)}</Text>
          </Pressable>
        }
      >
        <Menu.Item onPress={() => selectOrder("newest")} title="Latest" />
        <Menu.Item
          onPress={() => selectOrder("highestRating")}
          title="Highest rating"
        />
        <Menu.Item
          onPress={() => selectOrder("lowestRating")}
          title="Lowest rating"
        />
      </Menu>
    </Provider>
  );
};

export default RepositoryListContainer;
