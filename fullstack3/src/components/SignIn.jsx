import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';

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
            <TextInput
              placeholder="Username"
              onChangeText={handleChange("username")}
              value={values.username}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />
            <TouchableOpacity onPress={handleSubmit}><Text>Sign in</Text></TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;