import {View, Text} from 'react-native';
import React from 'react';
import DeliveryOptionsRender from './DeliveryOptionsRender';

interface IDeliveryOptions {
  onclick: (str: string) => void;
}
const DeliveryOptions = (p: IDeliveryOptions) => {
  type Ioptions = {
    option: string;
    icon: any;
    id: number;
  };
  const options: Ioptions[] = [
    {
      id: 1,
      option: 'Pick-up details',
      icon: require('../../../../assets/delivery/plus.png'),
    },
    {
      id: 2,
      option: 'Delivery details',
      icon: require('../../../../assets/delivery/plus.png'),
    },
  ];
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
      }}>
      {options.map((item, id) => (
        <DeliveryOptionsRender
          key={id}
          image={item.icon}
          onclick={p.onclick}
          option={item.option}
        />
      ))}
    </View>
  );
};

export default DeliveryOptions;
