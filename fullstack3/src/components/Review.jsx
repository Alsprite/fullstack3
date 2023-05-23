import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks'
import { CREATE_REVIEW } from '../graphql/mutation';

const styles = StyleSheet.create({
    input: {
        width: 400,
        marginVertical: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
    },
    button: {
        marginVertical: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 5,
    }
  });

  const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required(`Repository owner's name is required.`),
    repositoryName: yup
        .string()
        .required(`Repository's name is required.`),
    rating: yup
        .number()
        .min(0, `Rating must be between 0 and 100.`)
        .max(100, `Rating must be between 0 and 100.`),
    review: yup
        .string().optional()
});

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: ''
}

export const ReviewForm = ({ initialValues, onSubmit, validationSchema }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

const Review = () => { 
    const [mutate] = useMutation(CREATE_REVIEW)
    const navigate = useNavigate()
    const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
        try {
          const { data } = await mutate({
            variables: {
              review: { repositoryName: repositoryName, ownerName, rating: Number(rating), text },
            },
          });
          navigate('/')
        } catch (e) {
          console.log(e);
        }
      };
  
    return (
      <View style={theme.container}>
          
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <View style={styles.input}>
              <TextInput style={theme.fonts}
                placeholder="Repository owner's username"
                onChangeText={handleChange("ownerName")}
                value={values.ownerName}
              />
              {errors.ownerName && touched.ownerName && (
                  <Text style={styles.errorText}>{errors.ownerName}</Text>
              )}
              </View>
              <View style={styles.input}>
              <TextInput style={theme.fonts}
                placeholder="Repository name"
                onChangeText={handleChange("repositoryName")}
                value={values.repositoryName}
              />
              {errors.repositoryName && touched.repositoryName && (
                  <Text style={styles.errorText}>{errors.repositoryName}</Text>
                )}
              </View>
              <View style={styles.input}>
              <TextInput style={theme.fonts}
                placeholder="Rating"
                onChangeText={handleChange("rating")}
                value={values.rating}
              />
              {errors.rating && touched.rating && (
                  <Text style={styles.errorText}>{errors.rating}</Text>
                )}
              </View>
              <View style={styles.input}>
              <TextInput style={theme.fonts}
                placeholder="Review"
                onChangeText={handleChange("review")}
                value={values.review}
              />
              {errors.review && touched.review && (
                  <Text style={styles.errorText}>{errors.review}</Text>
                )}
              </View>
              <View style={styles.button}>
                  <TouchableOpacity onPress={handleSubmit}><Text style={theme.fonts}>Create review</Text></TouchableOpacity>
              </View>
              
            </>
          )}
        </Formik>
      </View>
    );
  };

export default Review