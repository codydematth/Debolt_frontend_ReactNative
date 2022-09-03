import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DeliveryOptions from './DeliveryOptions';
import PlaceOrderSelect from '../OrderSelect/PlaceOrderSelect';
import MerchantSellerOption from '../OrderSelect/MerchantSellerOption';
import SelectVehicleDropdown from '../vehicleType/SelectVehicleDropdown';

interface ICreateDeliveryBody {
  onclick?: () => void;
}
const CreateDeliveryBody = (p: ICreateDeliveryBody) => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 30,
          width: '100%',
          paddingTop: 10,
        }}>
        <DeliveryOptions onclick={() => {}} />
        <PlaceOrderSelect title='Place Order' />
        <MerchantSellerOption onclick={() => {}} />
        <SelectVehicleDropdown title='Click to select a vehicle type' />
      </View>
    </>
  );
};

export default CreateDeliveryBody;
