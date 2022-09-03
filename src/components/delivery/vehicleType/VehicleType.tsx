import {View, Text} from 'react-native';
import React, {useState} from 'react';
import VehicleTypeRender from './VehicleTypeRender';
interface IVehicleType {
  onclick?: () => void;
}
const VehicleType = (p: IVehicleType) => {
  type IItems = {
    id: number;
    name: string;
    image: any;
  };
  const items: IItems[] = [
    {
      id: 1,
      name: 'Bike',
      image: require('../../../../assets/delivery/bike.png'),
    },
    {
      id: 2,
      name: 'Small',
      image: require('../../../../assets/delivery/car.png'),
    },
    {
      id: 3,
      name: 'Medium',
      image: require('../../../../assets/delivery/wagon.png'),
    },
    {
      id: 4,
      name: 'Large',
      image: require('../../../../assets/delivery/truck.png'),
    },
  ];

  const [selected, setSelected] = useState('');
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {items.map((item, id) => (
          <VehicleTypeRender
            key={id}
            image={item.image}
            name={item.name}
            active={selected}
            onSelect={(val) => {
              setSelected(val);
            }}
          />
        ))}
      </View>
    </>
  );
};
export default VehicleType;
