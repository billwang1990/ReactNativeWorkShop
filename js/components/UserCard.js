'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class UserCard extends Component {
  render() {
    return (
      <View style={[styles.card, styles.shadow]}>
        <Image
          style={styles.avatar}
          source={{uri: 'http://www.people.com.cn/mediafile/pic/20101103/9/1550245162796501193.jpg'}}
          />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>liwen zhang</Text>
          <Text style={styles.job}>Dev on sun</Text>
          <Text style={styles.email}>lwzhang@thoughtworks.com</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  job: {
    fontSize: 14,
    color: '#666666'
  },
  email: {
    fontSize: 12,
    color: '#999999'
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  avatar: {
    width: 73,
    height: 73
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2
  }
});



