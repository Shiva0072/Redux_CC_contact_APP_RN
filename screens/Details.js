import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserDetails} from '../redux/actions/entities/users/userDetails';

const Details = ({navigation, route}) => {
  // console.log('navigation = ', navigation);
  //   console.log('route =', route.params.id);

  const details = useSelector(state => state.entities.userDetails.user);
  const loading = useSelector(state => state.entities.userDetails.loading);
  const err = useSelector(state => state.entities.userDetails.error);

  const dispatch = useDispatch();
  useEffect(() => {
    const id = route.params.id;
    dispatch(fetchUserDetails(id));
  }, []);

  console.log(err);
  return (
    <View>
      {loading && <Text>Loading ....</Text>}
      {!loading && !details && <Text>{err}</Text>}
      {details && (
        <Text style={{fontSize: 18}}>Details : {JSON.stringify(details)}</Text>
      )}
    </View>
  );
};

export default Details;
