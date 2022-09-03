import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

interface ISummaryAction {
  thumbnail: any;
  title: string;
  action?: string;
  other?: string;
}
const SummaryAction = ({action, thumbnail, title, other}: ISummaryAction) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          borderRadius: 10,
          elevation: 5,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Image source={thumbnail} style={{width: 45, height: 42}} />
        <Text style={{fontSize: 14}}> {title}</Text>
        <View style={{paddingRight: 10, alignItems: 'flex-start'}}>
          <TouchableOpacity>
            <Text style={{fontSize: 12, color: '#00A3FF'}}> {action}</Text>
          </TouchableOpacity>
          {other && (
            <TouchableOpacity>
              <Text style={{fontSize: 10, color: 'gray'}}>{other} </Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SummaryAction;
