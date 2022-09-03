import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface ISidemenuRender {
  name: string;
  onClick?: () => void;
}
const SideMenuRender = ({name, onClick}: ISidemenuRender) => {
  return (
    <View style={{paddingTop: 20}}>
      <TouchableOpacity
        onPress={() => {
          onClick && onClick;
        }}>
        <Text style={{color: '#000000', fontSize: 13}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenuRender;
