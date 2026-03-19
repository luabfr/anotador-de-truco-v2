import React from 'react';
import { BackHandler } from 'react-native';
import { MainButton } from '../Button/Button.styled';
import { MainButtonsWrap } from '../../screens/ScreenHome/ScreenHome.styled';

const ButtonCloseApp = () => {
	const handlePress = () => {
		BackHandler.exitApp();
	};
	return(
		<MainButtonsWrap absoluteBottom width100>
			<MainButton 
				label="Salir" 
				onPress={handlePress} />
		</MainButtonsWrap>
	)
}

export default ButtonCloseApp
