import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
interface Iheader {
  title: string;
}
const Header = ({title}: Iheader) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 40,
          width: '100%',
          shadowRadius: 20,
          elevation: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 15,
          borderBottomWidth: 1,
          shadowOpacity: 0.6,
          position: 'relative',
          borderBottomColor: '#ffffff',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 10,
            top: 40,
            justifyContent: 'center',
          }}>
          <MaterialIcons name='menu' size={28} color='black' />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontWeight: '200', fontSize: 16}}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
