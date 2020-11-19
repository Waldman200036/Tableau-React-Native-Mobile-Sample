import * as React from 'react';
import { StyleSheet } from 'react-native';


import V1z1 from './Viz1';

export default function TabOneScreen() {
  return (
      <V1z1/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
