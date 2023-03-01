import { FlatList, Pressable, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { Menu, Provider } from "react-native-paper";
import Text from "./Text";
import { useState } from "react";

const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        renderItem={renderItem}
        ListHeaderComponent={<SelectOrder order={order} setOrder={setOrder} />}
        ListHeaderComponentStyle={{ zIndex: 100 }}
        contentContainerStyle={{ backgroundColor: "#eee" }}
      />
    </View>
  );
};

const SelectOrder = ({ setOrder, order }) => {
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
        return "Newest first";
      case "highestRating":
        return "Highest rating first";
      case "lowestRating":
        return "Lowest rating first";
    }
  };

  return (
    <Provider>
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
            <Text>Order by: {orderText(order)}</Text>
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
