import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface IDeliveryButtons {
  label: string;
  onclick?: () => void;
}
const DeliveryButtons = ({label}: IDeliveryButtons) => {
  const bgColor = '#00A3FF';
  return (
    <View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          marginTop: 30,
          backgroundColor: bgColor,
          height: 35,
          borderRadius: 20,
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#ffffff', fontSize: 12}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryButtons;
