import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import UserIcon from '../assets/icons/user.svg';
import SearchIcon from '../assets/icons/search.svg';
import User1 from '../assets/images/user1.svg';
import User2 from '../assets/images/user2.svg';
import User3 from '../assets/images/user3.svg';
import User4 from '../assets/images/user4.svg';
import User5 from '../assets/images/user5.svg';
import User6 from '../assets/images/user6.svg';

const data = [
  {
    id: '1',
    user: 'Deola',
    message: 'Sticker 😍',
    time: '23 min',
    unread: 0,
    avatar: <User1 />,
  },
  {
    id: '2',
    user: 'Abigail',
    message: 'Typing..',
    time: '27 min',
    unread: 2,
    avatar: <User2 />,
  },
  {
    id: '3',
    user: 'Chidimma',
    message: 'Ok, see you then.',
    time: '33 min',
    unread: 0,
    avatar: <User3 />,
  },
  {
    id: '4',
    user: 'Vivian',
    message: 'You: Hey! What’s up, long time..',
    time: '50 min',
    unread: 1,
    avatar: <User4 />,
  },
  {
    id: '5',
    user: 'Funmi',
    message: 'You: Hello how are you?',
    time: '55 min',
    unread: 0,
    avatar: <User5 />,
  },
  {
    id: '6',
    user: 'Grace',
    message: 'You: Great I will write later..',
    time: '1 hour',
    unread: 0,
    avatar: <User6 />,
  },
];

// Render a chat
const renderChat = ({item}) => {
  return (
    <TouchableOpacity style={styles.list} activeOpacity={0.5}>
      {item?.avatar}
      <View style={styles.col2}>
        <View style={styles.userView}>
          <View style={styles.nameView}>
            <Text style={styles.user}>{item?.user}</Text>
            {item?.unread > 0 && (
              <View style={styles.unread}>
                <Text style={styles.unreadTxt}>{item?.unread}</Text>
              </View>
            )}
          </View>
          <Text style={styles.message}>{item?.message}</Text>
        </View>
        <Text style={styles.time}>{item?.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Messaging = () => {
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
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Chats</Text>
            <TouchableOpacity style={styles.userBtn}>
              <UserIcon />
            </TouchableOpacity>
          </View>

          {/* Search View */}
          <View style={styles.searchView}>
            <SearchIcon />
            <TextInput
              placeholder="Search"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="off"
              style={styles.input}
            />
          </View>
          <Text style={styles.title2}>Messages</Text>
          <FlatList
            data={data}
            renderItem={renderChat}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Messaging;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
    color: '#000',
  },
  title: {
    fontSize: '34@ms',
    color: '#000',
    fontWeight: '700',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userBtn: {
    width: '50@ms',
    height: '40@vs',
    borderWidth: 1,
    borderRadius: '15@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E8E6EA',
  },
  searchView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius: '15@ms',
    marginTop: '20@vs',
    height: '44@vs',
    paddingHorizontal: '18@ms',
    marginBottom: '30@vs',
  },
  input: {
    width: '90%',
    height: '90%',
    color: '#000',
    fontSize: '14@ms',
  },
  title2: {
    fontSize: '18@ms',
    fontWeight: '700',
    color: '#000',
    marginBottom: '16@vs',
  },
  list: {
    paddingVertical: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    color: '#000',
    fontWeight: '700',
    fontSize: '14@ms',
  },
  message: {
    color: '#4E4B6F',
    fontSize: '12@ms',
  },
  time: {
    color: '#ADAFBB',
    fontSize: '12@ms',
    fontWeight: '700',
  },
  col2: {
    width: '82%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: '10@vs',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E6EA',
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  unread: {
    backgroundColor: '#EB5757',
    height: '14@ms',
    width: '14@ms',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20@ms',
  },
  unreadTxt: {
    fontWeight: '700',
    fontSize: '8.4@ms',
    color: '#FFF',
  },
});
