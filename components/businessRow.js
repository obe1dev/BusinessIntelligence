import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../colors';
import {get, compact, isEmpty} from 'lodash';

export default function BusinessRow({business, onSelect}) {
  let location = '';
  if (get(business, 'location')) {
    const {address, city} = business.location;
    const list = [address, city];
    location = compact(list).join(', ');
  }
  return (
    <View style={style.separator}>
      <TouchableOpacity style={style.container} onPress={onSelect}>
        {get(business, 'name') && (
          <Text style={style.title}>{business.name}</Text>
        )}
        {!isEmpty(location) && <Text style={style.address}>{location}</Text>}
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  separator: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      height: 6,
    },
    shadowOpacity: 0.05,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
  },
  address: {
    paddingTop: 3,
    fontSize: 15,
  },
});
