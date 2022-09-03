import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {MaterialCommunityIcons} from '@expo/vector-icons';

interface IMerchantSellerOption {
  activeColor?: string;
  onclick?: () => void;
}
const MerchantSellerOption = ({
  activeColor,
  onclick,
}: IMerchantSellerOption) => {
  const [toggleActive, setToggleActive] = useState(true);
  const [toggleOff, setToggleOff] = useState(true);
  return (
    <>
      {/* ToggleOn */}
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 5,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 12}}>Do you want to return order</Text>
        {toggleActive ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                setToggleActive(!toggleActive);
              }}>
              <MaterialCommunityIcons
                name='toggle-switch'
                size={26}
                color='#00A3FF'
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                setToggleActive(true);
              }}>
              <MaterialCommunityIcons
                name='toggle-switch-off'
                size={26}
                color='#E5E5E5'
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* ToggleOff */}
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 5,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 12}}>Are you a Merchant/Seller?</Text>
        {toggleOff ? (
          <View>
            <TouchableOpacity
              style={{paddingTop: 5}}
              onPress={() => {
                setToggleOff(!toggleOff);
              }}>
              <MaterialCommunityIcons
                name='toggle-switch-off'
                size={26}
                color='#E5E5E5'
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={{paddingTop: 5}}
              onPress={() => {
                setToggleOff(true);
              }}>
              <MaterialCommunityIcons
                name='toggle-switch'
                size={26}
                color='#00A3FF'
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default MerchantSellerOption;
