import * as React from 'react';
import { StyleSheet } from 'react-native';

import Viz2 from './Viz2';

export default function TabTwoScreen() {
  return (
    <Viz2 />
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
