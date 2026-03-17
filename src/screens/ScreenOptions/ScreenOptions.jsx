import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import { MainButton } from '../../components/Button/Button.styled';

const OptionsContainer = styled.View`
	height: 100%; 
	background: black;
`;

const ScreenOptions = () => {


	const handleOpenPrivacyPolicy = () => {
		Linking.openURL('https://portfolio-luabfr.vercel.app/projects/anotador-de-truco/privacy-policy-v2')
			.catch((err) => console.error('Error al abrir el enlace:',err));
	};


	return (
		<OptionsContainer>
			<MainButton label="Ir a Politicas de Privacidad" onPress={handleOpenPrivacyPolicy} mt100 />
		</OptionsContainer>

	);
} 

export default ScreenOptions
