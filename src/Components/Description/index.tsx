import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './style';

interface DescriptionProps {}

export default function Description({}: DescriptionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> My Description </Text>
    </View>
  );
}
