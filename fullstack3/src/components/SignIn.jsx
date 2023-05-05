import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';

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
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <View style={styles.input}>
            <TextInput
              placeholder="Username"
              onChangeText={handleChange("username")}
              value={values.username}
            />
            </View>
            <View style={styles.input}>
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleSubmit}><Text>Sign in</Text></TouchableOpacity>
            </View>
            
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;