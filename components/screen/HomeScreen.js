import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import {fakeData, COLORS, FONTS, icons, images, SIZES} from '../../constants';

const HomeScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        {/* Menu hông */}
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => console.log('Menu list')}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={styles.imgListIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    alignContent: 'center',
  },
  btnMenu: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgListIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default HomeScreen;
