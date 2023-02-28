import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
  form: {
    padding: 10,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner's name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Only positive numbers please!")
    .max(100, "Ooh not that much!")
    .required("Rating is required"),
});

const AddReview = () => {
  const [mutate] = useMutation(ADD_REVIEW);
  const navigate = useNavigate();

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await mutate({
        variables: {
          review: {
            ...values,
            rating: Number(values.rating),
          },
        },
      });
      const repositoryId = response.data.createReview.repositoryId;
      console.log(response, repositoryId);
      navigate(`/${repositoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner's name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput name="rating" placeholder="Rating 0...100" />
          <FormikTextInput name="text" placeholder="Write a review" multiline />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="white" fontWeight="bold">
              Create a review
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default AddReview;
