import React, {useState, useRef} from 'react';
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
  Platform,
} from 'react-native';
import {color} from 'react-native-reanimated';

import {fakeData, COLORS, FONTS, icons, images, SIZES} from '../../constants';

const CITIES_ITEM_SIZES = SIZES.width / 3;

const HomeScreen = ({navigation}) => {
  const citiesScrollX = useRef(new Animated.Value(0)).current;

  const [city, setCity] = useState([{id: -1}, fakeData.data , {id: -2}]);

  function renderHeader() {
    return (
      <View style={styles.header}>
        {/* Side menu */}
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => console.log('Menu list')}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={styles.imgListIcon}
          />
        </TouchableOpacity>
        {/* Search bar */}
        <View style={styles.lblTitle}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Tìm kiếm</Text>
        </View>
        {/* User avatar */}
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image
            source={images.avatar1}
            resizeMode="contain"
            style={styles.userAvatar}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderCity() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={CITIES_ITEM_SIZES}
        scrollEventThrottle={16}
        decelerationRate={0}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: citiesScrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          const opacity = citiesScrollX.interpolate({
            inputRange: [
              (index - 2) * CITIES_ITEM_SIZES,
              (index - 1) * CITIES_ITEM_SIZES,
              index * CITIES_ITEM_SIZES,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const mapSize = citiesScrollX.interpolate({
            inputRange: [
              (index - 2) * CITIES_ITEM_SIZES,
              (index - 1) * CITIES_ITEM_SIZES,
              index * CITIES_ITEM_SIZES,
            ],
            outputRange: [25, Platform.OS === 'ios' ? 80 : 60, 25],
            extrapolate: 'clamp',
          });

          const fontSize = citiesScrollX.interpolate({
            inputRange: [
              (index - 2) * CITIES_ITEM_SIZES,
              (index - 1) * CITIES_ITEM_SIZES,
              index * CITIES_ITEM_SIZES,
            ],
            outputRange: [15, 25, 15],
            extrapolate: 'clamp',
          });

          if (index === 0 || index === city.length - 1) {
            return <View style={{width: CITIES_ITEM_SIZES}} />;
          } else {
            return (
              //   <View>
              //     <Text style={{color: COLORS.white}}>{item.name}</Text>
              //   </View>

              <Animated.View
                opacity={opacity}
                style={{
                  height: 130,
                  width: CITIES_ITEM_SIZES,
                  alignItem: 'center',
                  justifyContent: 'center',
                }}>
                <Animated.Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: mapSize,
                    height: mapSize,
                    tintColor: COLORS.white,
                  }}
                />
                <Animated.Text
                  style={{
                    marginTop: 3,
                    color: COLORS.white,
                    ...FONTS.h1,
                    fontSize: fontSize,
                  }}>
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
            // return (
            //   <Animated.View
            //     opacity={opacity}
            //     style={{
            //       height: 130,
            //       width: CITIES_ITEM_SIZES,
            //       alignItem: 'center',
            //       justifyContent: 'center',
            //     }}>
            //     <Animated.Image
            //       source={item.image}
            //       resizeMode="contain"
            //       style={{
            //         width: mapSize,
            //         height: mapSize,
            //         tintColor: COLORS.white,
            //       }}
            //     />
            //     <Animated.Text
            //       style={{
            //         marginTop: 3,
            //         color: COLORS.white,
            //         ...FONTS.h1,
            //         fontSize: fontSize,
            //       }}>
            //       {item.name}
            //     </Animated.Text>
            //   </Animated.View>
          }
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{paddingBottom: Platform.OS === 'ios' ? 40 : 0}}>
        <View style={{height: 700}}>
          {/* City */}
          <View>{renderCity()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
  lblTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
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
