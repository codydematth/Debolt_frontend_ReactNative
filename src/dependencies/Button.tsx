import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

type IButton = {
  bgColor?: string;
  color?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  type: 'sm' | 'normal' | 'custom';
  icon?: any;
};
const Button = ({
  bgColor,
  color,
  label,
  type,
  onClick,
  icon,
  active = true,
}: IButton) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 33,
          borderRadius: 15,
        },
        active === false && {
          opacity: 0.6,
        },
        type === 'normal' && {
          width: '75%',
          backgroundColor: '#00A3FF',
        },
        type === 'sm' && {
          width: '40%',
          backgroundColor: '#00A3FF',
        },
      ]}
      onPress={() => {
        if (active) {
          onClick && onClick();
        }
      }}>
      <Text
        style={{
          color: color || '#FFFFFF',
        }}>
        {label}
      </Text>
      {icon && <Text style={{paddingLeft: 3}}>{icon}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
