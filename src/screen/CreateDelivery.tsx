import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import CreateDeliveryBody from '../components/delivery/CreateDelivery/CreateDeliveryBody';
import DeliveryButtons from '../components/delivery/CreateDelivery/DeliveryButtons';

const CreateDelivery = () => {
  return (
    <KeyboardAvoidingView>
      <View>
        <Header title='Create a Delivery' />
      </View>
      <ScrollView>
        <View>
          <CreateDeliveryBody />
        </View>
        <DeliveryButtons label='Proceed to pay' />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateDelivery;
