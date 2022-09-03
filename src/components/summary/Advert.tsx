import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface IAdvert {
  title?: string;
  description: string;
}
const Advert = ({title, description}: IAdvert) => {
  return (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#00A3FF',
          width: '100%',
          height: 140,
          alignItems: 'center',
          borderRadius: 20,
          paddingTop: 15,
          marginTop: 15,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={{fontSize: 16, paddingBottom: 10}}>{title}</Text>
          <Text style={{fontSize: 14}}>{description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Advert;
