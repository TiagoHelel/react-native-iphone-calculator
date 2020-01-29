import React from 'react'
import {
	StyleSheet,
	Text, 
	View,
	PixelRatio,
	Dimensions,
	Platform
} from 'react-native'

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
	} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

normalize = size => {
	const newSize = size * scale 
	if (Platform.OS === 'ios') {
	return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
	}

const styles = StyleSheet.create({
	display: {
		flex: 1,
		padding: 20,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.6)',
		// backgroundColor: '#f2f133',
		alignItems: 'flex-end',
		// alignItems: 'center',
		},
		displayValue: {
			fontSize: normalize(30),
			color: '#fff'
		},
		displayValueMin: {
			fontSize: normalize(15),
			color: '#fff'
		}
})

export default props =>
	<View style={styles.display} >
		{ props.value6 != '0=0=0' && props.value2.length < 18 ? <Text style={styles.displayValue} numberOfLines={1}>{props.value6}</Text> 
			: props.value6 != '0=0=0' && props.value2.length > 17 ? <Text style={styles.displayValueMin} numberOfLines={1}>{props.value6}</Text> 
			: false }
		{ props.value5 != '0=0=0'  && props.value2.length < 18 ? <Text style={styles.displayValue} numberOfLines={1}>{props.value5}</Text> 
			: props.value5 != '0=0=0' && props.value2.length > 17 ? <Text style={styles.displayValueMin} numberOfLines={1}>{props.value5}</Text> 
			: false }
		{ props.value4 != '0=0=0'  && props.value2.length < 18 ? <Text style={styles.displayValue} numberOfLines={1}>{props.value4}</Text> 
			: props.value4 != '0=0=0' && props.value2.length > 17 ? <Text style={styles.displayValueMin} numberOfLines={1}>{props.value4}</Text> 
			: false }
		{ props.value3 != '0=0=0' && props.value2.length < 18 ? <Text style={styles.displayValue} numberOfLines={1}>{props.value3}</Text> 
			: props.value3 != '0=0=0' && props.value2.length > 17 ? <Text style={styles.displayValueMin} numberOfLines={1}>{props.value3}</Text> 
			: false }
		{ props.value2 != '0=0=0' && props.value2.length < 18 ? <Text style={styles.displayValue} numberOfLines={1}>{props.value2}</Text> 
			: props.value2 != '0=0=0' && props.value2.length > 17 ? <Text style={styles.displayValueMin} numberOfLines={1}>{props.value2}</Text> 
			: false }
		<Text style={styles.displayValue}
			numberOfLines={1}>{props.value}</Text>
	</View>