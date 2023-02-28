import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";
import SignIn from "./SignIn";
import AddReview from "./AddReview";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#eee",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/:id" element={<SingleRepository />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/addreview" element={<AddReview />} exact />
        <Route path="*" element={<Navigate to="/" />} replace />
      </Routes>
    </View>
  );
};

export default Main;
