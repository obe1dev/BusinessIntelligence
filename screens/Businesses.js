import React, {useMemo, useCallback, useState, useLayoutEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from 'react-native';
import Colors from '../colors';
import EmptyState from '../components/emptyState';
import * as data from '../data.json';
import {isEmpty, includes, lowerCase} from 'lodash';
import BusinessRow from '../components/businessRow';

export default function Businesses({navigation}) {
  //Fast way to add animation.
  //Automatically animates views to their new positions when the next layout happens.
  LayoutAnimation.linear();

  //If you need to mutate the DOM and/or do need to perform measurements
  // this works the same was as componentDidMound, componentDidUpdate.
  useLayoutEffect(() => {
    navigation.setOptions({
      // sets the header right to a search button
      headerRight: () => (
        <TouchableOpacity
          style={styles.magnifyButton}
          onPress={() => {
            setSearchOn((state) => !state);
            sortData('');
          }}>
          <Image source={require('../img/search.png')} style={styles.magnify} />
        </TouchableOpacity>
      ),
    });
    // sortData has to be memorized otherwise this hook we be
    // called every render.
  }, [navigation, sortData]);

  // before optimizing I like to create it first
  // because the data list is so small I normally wouldn't do this
  // unless it was huge. it's just demonstrating that I know how to  use useMemo.
  // Instead I would fetch the data
  // store it in redux and get the data from a selector.
  const companyData = useMemo(() => {
    if (!isEmpty(data)) {
      return Object.values(data);
    }
  }, []);

  const [searchOn, setSearchOn] = useState(false);
  const [companyList, setCompanyList] = useState(companyData);

  // Normally I wouldn't make this a hook either
  // but I am using this in the useLayoutEffect and passing it as a dependency.
  // useEffects are great for passing to a child to prevent unnecessary re-renders.
  const sortData = useCallback(
    (text) => {
      const lowerText = lowerCase(text);
      const list = companyData.filter((item) => {
        if (includes(lowerCase(item.name), lowerText)) {
          return item;
        }
      });
      setCompanyList(list);
    },
    [companyData],
  );

  const renderItem = ({item}) => {
    return (
      <BusinessRow
        business={item}
        onSelect={() => {
          navigation.push('Profile', {...item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/*
        I added this here so it would be a sticky header
        instead of adding it to ListHeaderComponent
       */}
      {searchOn && (
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search"
            onChangeText={sortData}
          />
        </View>
      )}
      <FlatList
        style={styles.listStyle}
        data={companyList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <EmptyState
            title="Company list is empty."
            bodyText={[
              'Once you have a list of companies',
              'they will be displayed here.',
            ]}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    backgroundColor: Colors.light1,
  },
  searchView: {
    backgroundColor: Colors.dark2,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  searchBox: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 18,
  },
  magnifyButton: {
    height: 25,
    width: 25,
    marginRight: 13,
  },
  magnify: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});
