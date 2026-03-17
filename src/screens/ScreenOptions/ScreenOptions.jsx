import React from 'react';
import { Linking, Switch } from 'react-native';
import styled from 'styled-components/native';
import { MainButton } from '../../components/Button/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setColorsPreset, setRoundPoints } from '../../store/actions';
import { colorTheme } from '../../components/colorTheme';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenHeight = windowDimensions.height;

const OptionsContainer = styled.View`
	flex: 1;
	background: ${props => `${colorTheme.mode[props.colorModeSelected].bg}`};
	padding: 24px;
`;

const ToggleRow = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 0;
`;

const ToggleLabel = styled.Text`
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text1}`};
	font-size: 16px;
	font-weight: 600;
`;

const CloseButton = styled.TouchableOpacity`
	height: ${Math.round(screenHeight * 0.06)}px;
  width: ${Math.round(screenHeight * 0.06)}px;
	border-radius: 5px;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].grayButtons}` };
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 64px;
	left: 50%;
	margin-left: ${-Math.round(screenHeight * 0.03)}px;
`;

const CloseButtonLabel = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: ${props =>
		props.colorModeSelected === 1
			? `${colorTheme.mode[1].bg}`
			: `${colorTheme.mode[props.colorModeSelected].text1}`};
`;

const ScreenOptions = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const roundPoints = useSelector((state) => state.teamsReducer.matchConfiguration.roundPoints);
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset);
	const insets = useSafeAreaInsets();
	const isDarkMode = colorModeSelected === 0;


	const handleOpenPrivacyPolicy = () => {
		Linking.openURL('https://portfolio-luabfr.vercel.app/projects/anotador-de-truco/privacy-policy-v2')
			.catch((err) => console.error('Error al abrir el enlace:',err));
	};

	const handleToggleRoundPoints = () => {
		dispatch(setRoundPoints(roundPoints === 30 ? 15 : 30));
	};

	const handleToggleColorMode = () => {
		dispatch(setColorsPreset(isDarkMode ? 1 : 0));
	};

	const handleCloseOptions = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colorTheme.mode[colorModeSelected].bg }}
			edges={['top', 'left', 'right']}
		>
			<OptionsContainer
				colorModeSelected={colorModeSelected}
				style={{ paddingTop: 24 + insets.top }}
			>
				<ToggleRow>
					<ToggleLabel colorModeSelected={colorModeSelected}>{`Partida a ${roundPoints} puntos`}</ToggleLabel>
					<Switch
						value={roundPoints === 30}
						onValueChange={handleToggleRoundPoints}
						trackColor={{
							false: colorTheme.mode[colorModeSelected].grayButtons,
							true: colorTheme.mode[colorModeSelected].textHighlighted,
						}}
						thumbColor={colorTheme.mode[colorModeSelected].text1}
						ios_backgroundColor={colorTheme.mode[colorModeSelected].grayButtons}
					/>
				</ToggleRow>
				<ToggleRow>
					<ToggleLabel colorModeSelected={colorModeSelected}>
						{isDarkMode ? 'Modo oscuro' : 'Modo claro'}
					</ToggleLabel>
					<Switch
						value={isDarkMode}
						onValueChange={handleToggleColorMode}
						trackColor={{
							false: colorTheme.mode[colorModeSelected].grayButtons,
							true: colorTheme.mode[colorModeSelected].textHighlighted,
						}}
						thumbColor={colorTheme.mode[colorModeSelected].text1}
						ios_backgroundColor={colorTheme.mode[colorModeSelected].grayButtons}
					/>
				</ToggleRow>
				<MainButton label="Ir a Politicas de Privacidad" onPress={handleOpenPrivacyPolicy} mt100 />
			</OptionsContainer>
			<CloseButton colorModeSelected={colorModeSelected} onPress={handleCloseOptions}>
				<CloseButtonLabel colorModeSelected={colorModeSelected}>X</CloseButtonLabel>
			</CloseButton>
		</SafeAreaView>

	);
} 

export default ScreenOptions
