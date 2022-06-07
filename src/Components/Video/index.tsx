import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import { styles } from './style';

const { width, height } = Dimensions.get('window');

interface VideoProps {}

export default function Video({}: VideoProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i9.ytimg.com/vi/eSLQi8qiSXw/maxresdefault.jpg?time=1654194300000&sqp=CPyA5JQG&rs=AOn4CLDX62DwG974iFQ9rXO_kXTehxqdQw',
        }}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '60%',
          }}
        >
          <AntDesign name='stepbackward' size={26} color='gray' />
          <AntDesign name='caretright' size={40} color='white' />
          <AntDesign name='stepforward' size={26} color='white' />
        </View>
        <View style={{ width: width + 20, top: 87 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              bottom: 10,
            }}
          >
            <Text style={{ color: 'white', fontSize: 10 }}> 05:30 </Text>
            <Text style={{ color: '#cccccc', fontSize: 10 }}> / 20:49 </Text>
          </View>
          <Slider
            style={{ width: width + 30 }}
            minimumValue={0}
            maximumValue={1}
            value={0.2}
            minimumTrackTintColor='red'
            maximumTrackTintColor='#bebebe'
            thumbTintColor='red'
          />
        </View>
      </ImageBackground>
    </View>
  );
}
