import {StyleSheet, Text, View} from 'react-native';
import CreateDelivery from './src/screen/CreateDelivery';
import Sidebar from './src/screen/Sidebar';
import Summary from './src/screen/Summary';

export default function App() {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Summary />
    </View>
  );
}
