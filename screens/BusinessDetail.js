import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {get} from 'lodash';

export default function BusinessDetail({navigation, route}) {
  const revenue = route.params?.revenue ?? null;
  let revValue = [];
  let revDate = [];
  revenue.map((item) => {
    if (get(item, 'date') && get(item, 'value')) {
      const parDate = moment(item.date).format('MMM YY');
      revValue.push(item.value);
      revDate.push(parDate);
    }
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, [navigation, route.params]);

  return (
    <View>
      <Text>cool</Text>
    </View>
  );
}
