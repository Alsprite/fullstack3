import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

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
    username: yup
        .string()
        .min(3, 'Username must be at least four characters long')
        .required('Username is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least six characters long')
        .required('Password is required'),
});

const initialValues = {
    username: '',
    password: ''
}

const SignIn = () => { 

  const onSubmit = (values) => {
    console.log(values);
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
              placeholder="Username"
              onChangeText={handleChange("username")}
              value={values.username}
            />
            {errors.username && touched.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
            )}
            </View>
            <View style={styles.input}>
            <TextInput style={theme.fonts}
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleSubmit}><Text style={theme.fonts}>Sign in</Text></TouchableOpacity>
            </View>
            
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;