/* eslint-disable react-native/no-inline-styles */
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
// import {color} from 'react-native-reanimated';

import {dummyData, COLORS, FONTS, icons, images, SIZES} from '../../constants';
// import {TextButton} from '../layout';

const CITIES_ITEM_SIZES = SIZES.width / 3;
const DISTRICT_ITEM_SIZE =
  Platform.OS === 'ios' ? SIZES.width / 1.25 : SIZES.width / 1.2;
const EMPTY_ITEM_SIZE = (SIZES.width - DISTRICT_ITEM_SIZE) / 2;

const HomeScreen = ({navigation}) => {
  const citiesScrollX = useRef(new Animated.Value(0)).current;
  const districtScrollX = useRef(new Animated.Value(0)).current;

  const [city, setCity] = useState([
    {id: -1},
    ...dummyData.countries,
    {id: -2},
  ]);
  const [district, setDistrict] = useState([
    {id: -1},
    ...dummyData.countries[0].places,
    {id: -2},
  ]);

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
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        data={city}
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
              // <View>
              //   <Text style={{color: COLORS.white}}>{item.name}</Text>
              // </View>

              <Animated.View
                opacity={opacity}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  height: 130,
                  width: CITIES_ITEM_SIZES,
                  alignItems: 'center',
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
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    marginTop: 3,
                    color: COLORS.white,
                    ...FONTS.h2,
                    fontSize: fontSize,
                  }}>
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
          }
        }}
      />
    );
  }
  function renderDistrict() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={district}
        keyExtractor={item => `${item.id}`}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          alignItems: 'center',
        }}
        snapToAlignment="center"
        snapToInterval={
          Platform.OS === 'ios' ? DISTRICT_ITEM_SIZE + 28 : DISTRICT_ITEM_SIZE
        }
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: districtScrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          const opacity = citiesScrollX.interpolate({
            inputRange: [
              (index - 2) * DISTRICT_ITEM_SIZE,
              (index - 1) * DISTRICT_ITEM_SIZE,
              index * DISTRICT_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          let activeHeight = 0;
          if (Platform.OS === 'ios') {
            if (SIZES.height > 800) {
              activeHeight = SIZES.height / 2;
            } else {
              activeHeight = SIZES.height / 1.65;
            }
          } else {
            activeHeight = SIZES.height / 1.6;
          }
          const height = districtScrollX.interpolate({
            inputRange: [
              (index - 2) * DISTRICT_ITEM_SIZE,
              (index - 1) * DISTRICT_ITEM_SIZE,
              index * DISTRICT_ITEM_SIZE,
            ],
            outputRange: [
              SIZES.height / 2.25,
              activeHeight,
              SIZES.height / 2.25,
            ],
            extrapolate: 'clamp',
          });

          if (index === 0 || index === district.length - 1) {
            return (
              <View
                style={{
                  width: EMPTY_ITEM_SIZE,
                }}
              />
            );
          } else {
            return (
              <Animated.View
                opacity={opacity}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: DISTRICT_ITEM_SIZE,
                  height: height,
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 10,
                }}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginHorizontal: SIZES.padding,
                  }}>
                  <Text
                    style={{
                      marginBottom: SIZES.radius,
                      color: COLORS.white,
                      ...FONTS.h1,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginBottom: SIZES.padding * 2,
                      textAlign: 'center',
                      color: COLORS.white,
                      ...FONTS.body5,
                      // color: COLORS.white,
                      ...FONTS.h1,
                    }}>
                    {item.description}
                  </Text>
                  {/* <TextButton
                    label="Khám phá"
                    customContainerStyle={{
                      position: 'absolute',
                      bottom: -20,
                      width: 150,
                    }}
                  /> */}
                </View>
              </Animated.View>
            );
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

          {/* District */}
          <View style={{height: Platform.OS === 'ios' ? 500 : 450}}>
            {renderDistrict()}
          </View>
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
