import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
interface IDeliveryOptionsRender {
  onclick?: (str: string) => void;
  option: string;
  image: any;
}
const DeliveryOptionsRender = ({
  onclick,
  option,
  image,
}: IDeliveryOptionsRender) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 5,
          left: 0,
          right: 0,
        }}>
        <Text style={{fontSize: 12}}>{option}</Text>
        <TouchableOpacity
          onPress={() => {
            onclick;
          }}>
          <Image source={image} style={{height: 22, width: 22}} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DeliveryOptionsRender;
