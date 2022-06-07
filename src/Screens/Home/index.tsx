import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';

//Adicionamos essa função para que o gesture na modal funcione
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Video from '../../Components/Video';
import Description from '../../Components/Description';

import { styles } from './style';

const { width, height } = Dimensions.get('window');

function Home() {
  //Adicionamos uma referencia a ele para que possamos aplicar
  //propriedades de estado abre ou fecha por exemplo
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' style='light' />
      <Video />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
          paddingRight: 20,
        }}
        activeOpacity={0.9}
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'left',
            fontWeight: '600',
          }}
        >
          {' '}
          [Passo a Passo] Usando Styled Components no ReactJS{' '}
        </Text>
        <AntDesign name='down' size={16} color='white' />
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#999', fontSize: 12 }}> 30 views • 8d ago </Text>
        <Text style={{ color: '#3070f8', fontSize: 12 }}>
          {' '}
          #icodemobile #styledcomponentreact #comousarstyledcomponents{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 10,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <AntDesign name='like2' size={24} color='#e9e8e8' />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> 2 </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <AntDesign name='dislike2' size={24} color='#e9e8e8' />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> Dislike </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name='share-outline'
            size={24}
            color='#e9e8e8'
          />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> Share </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name='download-outline'
            size={24}
            color='#e9e8e8'
          />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> Download </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Ionicons name='cut-outline' size={24} color='#e9e8e8' />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> Clip </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name='plus-box-multiple-outline'
            size={24}
            color='#e9e8e8'
          />
          <Text style={{ color: '#e9e8e8', marginTop: 3 }}> Save </Text>
        </View>
      </View>
      <View
        style={{
          width,
          height: 0.3,
          backgroundColor: '#424242',
          marginTop: 10,
        }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={[1, height - 260]}
        backgroundStyle={{ backgroundColor: '#333' }}
        handleIndicatorStyle={{ backgroundColor: '#555' }}
        enableHandlePanningGesture
      >
        <Description />
      </BottomSheet>
    </View>
  );
}

//A exportação desse jeito nos permite ter o gesto aplicado
export default gestureHandlerRootHOC(Home);
