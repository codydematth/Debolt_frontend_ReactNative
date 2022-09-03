import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface IButtonLarge {
  title: string;
  description?: string;
  bgColor: string;
}
const ButtonLarge = ({title, description, bgColor}: IButtonLarge) => {
  return (
    <View>
      {/* Button  */}
      <TouchableOpacity
        style={{
          paddingTop: 20,
          alignItems: 'center',
          backgroundColor: bgColor,
          width: 145,
          height: 160,
          borderRadius: 20,
        }}>
        <Text style={{color: '#ffffff', fontSize: 14, paddingBottom: 15}}>
          {title}
        </Text>
        <Text style={{color: '#ffffff', fontSize: 26, fontWeight: 'bold'}}>
          {description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLarge;
