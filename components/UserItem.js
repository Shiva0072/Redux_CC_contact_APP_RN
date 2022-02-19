import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UserItem = ({id, dp, name}) => {
  const navigation = useNavigation();
  getUserId = id => {
    // console.log('userId = ', id);
    navigation.navigate('Details', {id: id});
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => getUserId(id)}>
      <View style={styles.container}>
        <Image source={{uri: dp}} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
    marginHorizontal: 7,
  },
  container: {
    flexDirection: 'row',
    padding: 3,
    paddingHorizontal: 2,
    marginVertical: 2,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'tomato',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default UserItem;
