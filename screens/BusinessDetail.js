import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import {get, isEmpty} from 'lodash';
import Chart from '../components/barChart';

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
