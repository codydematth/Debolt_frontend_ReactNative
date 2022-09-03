import {View, Text} from 'react-native';
import React from 'react';
import RadioButtonPair from '../../dependencies/RadioButtonPair';

const RadioButtons = () => {
  return (
    <View style={{paddingTop: 10, paddingBottom: 10}}>
      <RadioButtonPair
        buttonNameOne='Right Away'
        buttonNameTwo='Schedule for later'
        onChange={() => {}}
      />
      <RadioButtonPair
        buttonNameOne='Right Away'
        buttonNameTwo='Schedule for later'
        onChange={() => {}}
      />
    </View>
  );
};

export default RadioButtons;
