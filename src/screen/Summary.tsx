import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Header from './Header';
import ButtonLarge from '../components/summary/ButtonLarge';
import Advert from '../components/summary/Advert';
import Button from '../dependencies/Button';
import {AntDesign} from '@expo/vector-icons';
import SummaryAction from '../components/summary/SummaryAction';

const Summary = () => {
  const dateOfTheWeek = 'Tuesday';
  const date = '06/08/2022';
  const groupImage = require('../../assets/summary/summarygroup.png');
  const historyImage = require('../../assets/summary/summaryhistory.png');
  return (
    <KeyboardAvoidingView style={{height: '100%'}}>
      <View>
        <Header title='Summary' />
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: 30,
            width: '100%',
            paddingTop: 10,
            height: '100%',
          }}>
          {/* Date  and Day of the week*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 16,
            }}>
            <Text style={{fontSize: 20, fontWeight: '300'}}>
              {dateOfTheWeek}
            </Text>
            {/* Date */}
            <Text style={{fontSize: 12}}>{date}</Text>
          </View>

          {/* Pair Buttons */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ButtonLarge
              bgColor='#00A3FF'
              title='Pending Orders'
              description='20'
            />
            <ButtonLarge
              bgColor='#00FF19'
              title='Income Today'
              description='₦500,000'
            />
          </View>
          {/* Advert */}
          <Advert
            title='Advert'
            description='Advert or Statictics in graph or pie chat like the one we have now'
          />

          <View style={{paddingVertical: 20, paddingHorizontal: 12}}>
            <Text style={{fontSize: 20, fontWeight: '400'}}>
              Delivery Company
            </Text>
            <Text style={{fontSize: 12}}>
              The delivery company the Rider registered with
            </Text>
          </View>
          {/* Contact Button */}
          <View style={{paddingHorizontal: 12}}>
            <Button
              label='Contact'
              type='sm'
              icon={<AntDesign name='arrowright' size={14} color='#ffffff' />}
              bgColor='#00A3FF'
              onClick={() => {}}
            />
          </View>
          {/* Summary ACtions */}
          <View>
            <SummaryAction
              title='Refferals'
              action='Referral ID'
              other='Tap to Copy'
              thumbnail={groupImage}
            />
            <SummaryAction
              title='History'
              action='View'
              thumbnail={historyImage}
            />
          </View>

          {/* Adverts */}
          <View style={{marginBottom: 20}}>
            <Advert
              description='Advert.  NB: the boder is just hint for
size . also if you didnt use the above 
space for advert. then add it here. 
it can also be a carousel hence 
the dots below'
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Summary;
