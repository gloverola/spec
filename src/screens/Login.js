import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Logo from '../assets/icons/logo3.svg';
import EyeOff from '../assets/icons/eye-off-sharp.svg';
import {ScaledSheet} from 'react-native-size-matters';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/spec-bg.png')}>
        <ScrollView contentContainerStyle={styles.container2}>
          <Logo />

          <View style={styles.form}>
            <Text style={styles.headerTxt}>Log In</Text>
            <TextInput
              placeholder="Email or Username"
              style={styles.input}
              placeholderTextColor="#16123D"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.passwordInput}>
              <TextInput
                placeholder="Password"
                style={styles.input2}
                placeholderTextColor="#16123D"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
              <TouchableOpacity>
                <EyeOff />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotBtn}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cta}>
            <TouchableOpacity
              style={styles.loginBtn}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.loginTxt}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signup}>
              Don't have an account?{' '}
              <Text style={styles.signupTxt}>Sign Up</Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: '20@ms',
  },
  form: {
    marginTop: '25%',
    width: '100%',
  },
  headerTxt: {
    fontSize: 21,
    fontWeight: '800',
    marginTop: '40@vs',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20@vs',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '17@ms',
    height: '50@vs',
    padding: '18@ms',
    fontSize: '13@ms',
    color: '#000',
  },
  passwordInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '17@ms',
    height: '50@vs',
    paddingHorizontal: '18@ms',
    fontSize: '13@ms',
    color: '#000',
    marginTop: '20@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input2: {
    fontSize: '13@ms',
    color: '#000',
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
  },
  forgot: {
    fontSize: '12@ms',
    fontWeight: '600',
    color: '#fff',
    textAlign: 'left',
  },
  forgotBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '14@vs',
  },
  cta: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '100%',
    height: '50@vs',
    borderRadius: 5,
    backgroundColor: '#EB5757',
    marginTop: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTxt: {
    fontWeight: '400',
    fontSize: '15@ms',
    color: '#fff',
  },
  signup: {
    fontSize: '12@ms',
    fontWeight: '400',
    color: '#fff',
    marginTop: '10@vs',
  },
  signupTxt: {
    fontSize: '12@ms',
    fontWeight: '700',
    color: '#fff',
  },
});
