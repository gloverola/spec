import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

const Contacts = () => {
  return (
    <>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: 'transparent'}} /> */}
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          backgroundColor="#FFF"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Contacts</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Contacts;

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
