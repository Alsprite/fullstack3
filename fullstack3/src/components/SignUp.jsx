import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import React from 'react';
import theme from '../theme';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as yup from 'yup';
import { SIGN_UP } from '../graphql/mutation';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";

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
      .min(1, 'Username must be between 1 and 30 characters long')
      .max(30, 'Username must be between 1 and 30 characters long')
      .required('Username is required'),
  
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be between 5 and 30 characters long')
      .max(30, 'Username must be between 5 and 30 characters long'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
  
const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
};

const SignUpForm = ({ onSubmit }) => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    );
  };
  
  

  const SignUp = () => {
    const [createUser] = useMutation(SIGN_UP);
    const [signIn] = useSignIn();
    const navigate = useNavigate() 
  
    const onSubmit = async (values) => {
      const { username, password } = values;      
      try {
        const { data } = await createUser({
          variables: { user: { username, password } },
        });
  
        if (data) {
          try {
            await signIn({ username, password });
            console.log("gj")
            navigate('/')
          } catch (e) {
            console.log('sign in error after creating new user', e);
          }
        }
      } catch (e) {
        console.log('error creating user', e);
      }
    };
  
    return (
        <View style={theme.container}>
            <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
        <View style={styles.input}>
          <TextInput name="username" placeholder="Username" value={values.username} onChangeText={handleChange("username")}/>
        </View>
        {errors.username && touched.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
        <View style={styles.input}>
          <TextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange("password")}
          />
        {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
        </View>
        <View style={styles.input}>
          <TextInput
            name="passwordConfirm"
            placeholder="Password confirmation"
            secureTextEntry={true}
            value={values.passwordConfirm}
            onChangeText={handleChange("passwordConfirm")}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
                  <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
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
  
  export default SignUp;