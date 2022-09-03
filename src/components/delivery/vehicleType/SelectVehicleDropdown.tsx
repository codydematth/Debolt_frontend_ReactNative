import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import VehicleType from './VehicleType';

interface ISelectVehicleDropdown {
  title?: string;
  vehicleType?: string;
}
const SelectVehicleDropdown = ({
  title,
  vehicleType,
}: ISelectVehicleDropdown) => {
  const [selectOrder, setSelectOrder] = useState(false);

  const [showVehicleType, setShowVehicleType] = useState(false);
  return (
    <>
      <View>
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
            setShowVehicleType(!showVehicleType);
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

        {showVehicleType && <VehicleType onclick={() => {}} />}
      </View>
    </>
  );
};

export default SelectVehicleDropdown;
