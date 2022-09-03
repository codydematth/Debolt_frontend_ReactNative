import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import RadioButtons from '../../buttons/RadioButtons';

interface IPlaceOrderSelect {
  title?: string;
}
const PlaceOrderSelect = ({title}: IPlaceOrderSelect) => {
  const [selectOrder, setSelectOrder] = useState(false);
  const [showRadioButtonOptions, setShowRadioButtonOptions] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#00A3FF',
          alignItems: 'center',
          paddingBottom: 3,
          marginBottom: 10,
          paddingTop: 10,
        }}
        onPress={() => {
          setSelectOrder(!selectOrder);
          setShowRadioButtonOptions(!showRadioButtonOptions);
        }}>
        <Text style={{fontSize: 12}}>{title}</Text>
        <View
          style={{
            paddingRight: 5,
          }}>
          <AntDesign
            name='caretdown'
            size={14}
            style={{
              color: '#00A3FF',
              transform: [{rotate: selectOrder ? '180deg' : '0deg'}],
            }}
          />
        </View>
      </TouchableOpacity>
      {/* Radio Buttons */}
      {showRadioButtonOptions && <RadioButtons />}
    </>
  );
};

export default PlaceOrderSelect;
