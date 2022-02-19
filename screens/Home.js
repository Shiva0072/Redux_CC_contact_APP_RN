import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchUser} from '../redux/actions/entities/users/users';
import UserItem from '../components/UserItem';

const Item = ({item}) => {
  return (
    <UserItem
      id={item.id}
      dp={item.avatar}
      name={item.first_name.concat(' ', item.last_name)}
    />
  );
};

const Home = () => {
  const loading = useSelector(state => state.entities.users.loading);
  const users = useSelector(state => state.entities.users.users);

  const dispatch = useDispatch();
  const getContacts = () => {
    dispatch(fetchUser({}));
  };

  return (
    <View>
      {loading ? (
        <Button title="All Contacts " onPress={getContacts}></Button>
      ) : null}
      {users && (
        <FlatList
          data={users.data}
          keyExtractor={item => item.id}
          renderItem={Item}
        />
      )}
    </View>
  );
};

export default Home;
