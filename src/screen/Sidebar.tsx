import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import SideMenuRender from '../components/sidebar/SideMenuRender';

interface ISidebar {
  onClick?: () => void;
}
const Sidebar = (p: ISidebar) => {
  type ImenuItem = {
    name: string;
    id: number;
  };
  const menu: ImenuItem[] = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Create a delivery',
    },
    {
      id: 3,
      name: 'Place order',
    },
    {
      id: 4,
      name: 'Referrals',
    },
    {
      id: 5,
      name: 'Order History',
    },
    {
      id: 6,
      name: 'Contact',
    },
    {
      id: 7,
      name: 'Storefront',
    },
  ];
  const username = 'Adebayo Goodness';
  const appVersion = 3.567;
  return (
    <View style={{height: '100%', backgroundColor: '#ffffff9f'}}>
      <View
        style={{
          backgroundColor: '#ffffff',
          elevation: 20,
          zIndex: -1,
          width: '80%',
          height: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#00A3FF',
            paddingTop: 30,
            height: '41%',
            width: '100%',
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 60,
              height: 120,
              width: 120,
              marginBottom: 20,
            }}></TouchableOpacity>
          <Text style={{color: '#ffffff'}}>{username}</Text>
        </View>
        <ScrollView>
          <View>
            {menu.map((item, id) => (
              <SideMenuRender key={id} name={item.name} onClick={p.onClick} />
            ))}
          </View>
          <View style={{paddingTop: 50}}>
            <Text style={{fontSize: 13}}>App Version {appVersion}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Sidebar;
