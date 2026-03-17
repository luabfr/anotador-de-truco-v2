import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
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
	font-size: 20px;
	font-weight: 600;
`;

const ToggleGroup = styled.View`
	flex-direction: row;
	border-width: 1px;
	border-color: ${props => `${colorTheme.mode[props.colorModeSelected].grayButtons}`};
	border-radius: 8px;
	overflow: hidden;
`;

const ToggleOption = styled.TouchableOpacity`
	padding: 8px 12px;
	background: ${props =>
		props.active
			? `${colorTheme.mode[props.colorModeSelected].textHighlighted}`
			: 'transparent'};
`;

const ToggleOptionLabel = styled.Text`
	color: ${props =>
		props.active
			? `${colorTheme.mode[props.colorModeSelected].bg}`
			: `${colorTheme.mode[props.colorModeSelected].text1}`};
	font-size: 14px;
	font-weight: 700;
`;

const TitleScreen = styled.Text`
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text2}`};
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 12px;
	border-bottom-width: 1px;
	border-bottom-color: ${props => `${colorTheme.mode[props.colorModeSelected].grayButtons}`};
	padding-bottom: 16px;
`;

const LinkButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0;
`;

const LinkLabel = styled.Text`
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text2}`};
	font-size: 16px;
	font-weight: 600;
`;

const LinkIcon = styled.Text`
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text2}`};
	font-size: 18px;
	font-weight: 700;
`;

const CloseButton = styled.TouchableOpacity`
	height: ${Math.round(screenHeight * 0.06)}px;
  width: ${Math.round(screenHeight * 0.06)}px;
	border-radius: ${Math.round(screenHeight * 0.03)}px;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].textHighlighted}` };
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
				<TitleScreen colorModeSelected={colorModeSelected}>Opciones</TitleScreen>
				<ToggleRow>
					<ToggleLabel colorModeSelected={colorModeSelected}>{`Partida a ${roundPoints} puntos`}</ToggleLabel>
					<ToggleGroup colorModeSelected={colorModeSelected}>
						<ToggleOption
							colorModeSelected={colorModeSelected}
							active={roundPoints === 15}
							onPress={() => dispatch(setRoundPoints(15))}
						>
							<ToggleOptionLabel colorModeSelected={colorModeSelected} active={roundPoints === 15}>
								15
							</ToggleOptionLabel>
						</ToggleOption>
						<ToggleOption
							colorModeSelected={colorModeSelected}
							active={roundPoints === 30}
							onPress={() => dispatch(setRoundPoints(30))}
						>
							<ToggleOptionLabel colorModeSelected={colorModeSelected} active={roundPoints === 30}>
								30
							</ToggleOptionLabel>
						</ToggleOption>
					</ToggleGroup>
				</ToggleRow>
				<ToggleRow>
					<ToggleLabel colorModeSelected={colorModeSelected}>
						{isDarkMode ? 'Modo oscuro' : 'Modo claro'}
					</ToggleLabel>
					<ToggleGroup colorModeSelected={colorModeSelected}>
						<ToggleOption
							colorModeSelected={colorModeSelected}
							active={!isDarkMode}
							onPress={() => dispatch(setColorsPreset(1))}
						>
							<ToggleOptionLabel colorModeSelected={colorModeSelected} active={!isDarkMode}>
								Claro
							</ToggleOptionLabel>
						</ToggleOption>
						<ToggleOption
							colorModeSelected={colorModeSelected}
							active={isDarkMode}
							onPress={() => dispatch(setColorsPreset(0))}
						>
							<ToggleOptionLabel colorModeSelected={colorModeSelected} active={isDarkMode}>
								Oscuro
							</ToggleOptionLabel>
						</ToggleOption>
					</ToggleGroup>
				</ToggleRow>
				
				<LinkButton onPress={handleOpenPrivacyPolicy}>
					<LinkLabel colorModeSelected={colorModeSelected}>Ver las Politicas de Privacidad</LinkLabel>
					<LinkIcon colorModeSelected={colorModeSelected}>&gt;</LinkIcon>
				</LinkButton>
				
			</OptionsContainer>
			<CloseButton colorModeSelected={colorModeSelected} onPress={handleCloseOptions}>
				<CloseButtonLabel colorModeSelected={colorModeSelected}>X</CloseButtonLabel>
			</CloseButton>
		</SafeAreaView>

	);
} 

export default ScreenOptions
