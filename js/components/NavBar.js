'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function NavBar() {
  return (
    <View style={[styles.navBar, styles.shadow]}>
      <Text style={styles.navBarTitle}>ThoughtWorkers</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#F50057',
    height: 64,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2
  },
  navBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});