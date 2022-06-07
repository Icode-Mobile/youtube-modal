import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width,
    height: height - 495,
    zIndex: 100,
  },
});
