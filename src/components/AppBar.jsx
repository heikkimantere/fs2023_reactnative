import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 10,
    paddingLeft: 10
    // ...
  },
  // ...
});

const AppBar = () => {

  const onPressAppBar = () => {
    console.log("boom!")
  }
  
  return <Pressable style={styles.container} onPress={onPressAppBar}>
    <Text color='white' fontWeight='bold'>Repositories</Text>
  </Pressable>;
};

export default AppBar;