import React from 'react';
import {Text, View} from 'react-native';
import {RadioButton as HOCRadioButton} from 'react-native-paper';

type IRadioButtonPair = {
  buttonNameOne: string; // as unique title
  buttonNameTwo: string; // as unique title
  onChange: (name: string) => void;
};
const RadioButtonPair = ({
  buttonNameOne,
  buttonNameTwo,
  onChange,
}: IRadioButtonPair) => {
  const val = buttonNameOne || buttonNameTwo;
  const [checked, setChecked] = React.useState(buttonNameOne);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Radio One */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <HOCRadioButton
            color='#00A3FF'
            uncheckedColor='#00A3FF'
            status={checked === buttonNameOne ? 'checked' : 'unchecked'}
            value={buttonNameOne}
            onPress={() => {
              onChange && onChange(val);
              setChecked(buttonNameOne);
            }}
          />
          {/* Text/Name */}
          <Text style={{fontSize: 12}}>{buttonNameOne}</Text>
        </View>
        {/* Radio two */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <HOCRadioButton
            color='#00A3FF'
            uncheckedColor='#00A3FF'
            status={checked === buttonNameTwo ? 'checked' : 'unchecked'}
            value={buttonNameTwo}
            onPress={() => {
              onChange && onChange(val);
              setChecked(buttonNameTwo);
            }}
          />
          {/* Text/Name */}
          <Text style={{fontSize: 12}}>{buttonNameTwo}</Text>
        </View>
      </View>
    </View>
  );
};

export default RadioButtonPair;
