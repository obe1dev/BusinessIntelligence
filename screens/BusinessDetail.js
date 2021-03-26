import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import {get, isEmpty} from 'lodash';
import Chart from '../components/barChart';

export default function BusinessDetail({navigation, route}) {
  // Although I'm passing nav as props
  // depending on how large my project is I would use
  // reactNavigation useNavigation() hooks.
  // for simplicity or for deeply nested children.
  const revenue = route.params?.revenue ?? [];
  let revValue = [];
  let revDate = [];
  revenue.map((item) => {
    if (get(item, 'date') && get(item, 'value')) {
      //only display the month and year
      const parDate = moment(item.date).format('MMM YY');
      revValue.push(item.value);
      revDate.push(parDate);
    }
  });
  // If you need to mutate the DOM and/or do need to perform measurements
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, [navigation, route.params]);

  return (
    <View style={styles.container}>
      {!isEmpty(revValue) && !isEmpty(revDate) && (
        <Chart xValues={revDate} yValues={revValue} style={styles.chart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  chart: {
    width: '100%',
    height: '95%',
  },
});
