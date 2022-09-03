import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface IVehicleTypeRender {
  image: any;
  name: string;
  active?: string;
  onSelect?: (str: string) => void;
}
const VehicleTypeRender = ({
  image,
  name,
  active,
  onSelect,
}: IVehicleTypeRender) => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            onSelect && onSelect(name);
          }}
          style={[
            {
              borderRadius: 20,
              borderWidth: 1,
              padding: 5,
              borderColor: '#00A3FF',
            },
            active !== name && {
              borderColor: '#d3d1d1e3',
            },
          ]}>
          <Image
            source={image}
            style={[
              {width: 30, height: 30, tintColor: '#00A3FF'},
              active !== name && {
                tintColor: '#575555e3',
              },
            ]}
          />
        </TouchableOpacity>
        <Text
          style={[
            {fontSize: 12, color: '#00A3FF'},
            active !== name && {color: '#575555e3'},
          ]}>
          {name}
        </Text>
      </View>
    </>
  );
};

export default VehicleTypeRender;
