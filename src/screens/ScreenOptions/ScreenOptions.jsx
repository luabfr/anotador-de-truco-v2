import React from 'react';
import { Linking, Switch } from 'react-native';
import styled from 'styled-components/native';
import { MainButton } from '../../components/Button/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setRoundPoints } from '../../store/actions';
import { colorTheme } from '../../components/colorTheme';

const OptionsContainer = styled.View`
	height: 100%;
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

const ScreenOptions = () => {
	const dispatch = useDispatch();
	const roundPoints = useSelector((state) => state.teamsReducer.matchConfiguration.roundPoints);
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset);


	const handleOpenPrivacyPolicy = () => {
		Linking.openURL('https://portfolio-luabfr.vercel.app/projects/anotador-de-truco/privacy-policy-v2')
			.catch((err) => console.error('Error al abrir el enlace:',err));
	};

	const handleToggleRoundPoints = () => {
		dispatch(setRoundPoints(roundPoints === 30 ? 15 : 30));
	};


	return (
		<OptionsContainer colorModeSelected={colorModeSelected}>
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
			<MainButton label="Ir a Politicas de Privacidad" onPress={handleOpenPrivacyPolicy} mt100 />
		</OptionsContainer>

	);
} 

export default ScreenOptions
