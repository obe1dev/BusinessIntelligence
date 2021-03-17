import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../colors';

const EmptyState = ({title, bodyText = []}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/Divvy-Logo.png')} style={styles.logo} />

      {title && <Text style={styles.titleText}>{title}</Text>}

      {bodyText.length &&
        bodyText.map((text, index) => (
          <Text style={[styles.bodyText, !index && {marginTop: 26}]}>
            {text}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    color: Colors.dark2,
    marginTop: 13,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.dark2,
  },
});

export default EmptyState;
