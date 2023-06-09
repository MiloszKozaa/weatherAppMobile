import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const buttonStyles = StyleSheet.create({
  wrapper: {},
  button: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
  },
});

export default buttonStyles;
