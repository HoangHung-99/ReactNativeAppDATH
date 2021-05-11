import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';

import {HeaderBar, TextIconButton} from '../layout';
import {COLORS, SIZES, FONTS, icons} from '../../constants';

const PlaceScreen = ({navigation, route}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    let {selectedPlace} = route.params;
    setSelectedPlace(selectedPlace);
  }, []);

  function renderPlace() {
    return (
      <ImageBackground
        source={selectedPlace?.image}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <HeaderBar
          title=""
          leftOnPressed={() => navigation.goBack()}
          right={false}
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            justifyContent: 'flex-end',
            marginBottom: 100,
          }}>
          {/* Name & Ratings */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.largeTitle,
              }}>
              {selectedPlace?.name}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginRight: 5,
                  color: COLORS.white,
                  ...FONTS.h3,
                }}>
                {selectedPlace?.rate}
              </Text>
              <Image
                source={icons.star}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          {/* Description */}
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            {selectedPlace?.description}
          </Text>

          {/* Text Icon Btn */}
          {/* <TextIconButton
            label="Đặt ngay"
            customContainerStyle={{
              marginTop: SIZES.padding,
            }}
          /> */}
        </View>
      </ImageBackground>
    );
  }

  return <View style={styles.container}>{renderPlace()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
export default PlaceScreen;
