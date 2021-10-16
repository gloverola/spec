import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

const Profile = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <StatusBar
          backgroundColor="#FFF"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
