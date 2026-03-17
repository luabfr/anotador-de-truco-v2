import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { colorTheme } from '../../components/colorTheme';

const Container = styled(ScrollView)`
	flex: 1;
	background-color: ${props => `${colorTheme.mode[props.colorModeSelected].bg}`};
	padding: 20px;
`;

const Title = styled(Text)`
	font-size: 24px;
	font-weight: 700;
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text1}`};
	margin-bottom: 16px;
`;

const Paragraph = styled(Text)`
	font-size: 16px;
	line-height: 24px;
	color: ${props => `${colorTheme.mode[props.colorModeSelected].text2}`};
	margin-bottom: 12px;
`;

const ScreenPrivatePolicy = () => {
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset);

	return (
		<Container colorModeSelected={colorModeSelected}>
			<Title colorModeSelected={colorModeSelected}>Politica de Privacidad de la aplicacion Anotador de Truco</Title>
			<Paragraph colorModeSelected={colorModeSelected}>Ultima actualizacion: 05/03/2026</Paragraph>
			<Paragraph colorModeSelected={colorModeSelected}>
				Esta aplicacion no recopila informacion personal identificable de forma directa.
				Puede incluir servicios de terceros (como publicidad) que procesen datos tecnicos
				del dispositivo para diagnostico y rendimiento.
			</Paragraph>
			<Paragraph colorModeSelected={colorModeSelected}>
				Los datos procesados por terceros pueden incluir direccion IP, identificadores del
				dispositivo, datos de uso y eventos vinculados a anuncios.
			</Paragraph>
			<Paragraph colorModeSelected={colorModeSelected}>
				No se venden datos personales. El procesamiento por terceros se limita a fines
				operativos, analiticos y publicitarios.
			</Paragraph>
			<Paragraph colorModeSelected={colorModeSelected}>
				Si tenes consultas sobre esta politica, podes contactarte por correo a:{"\n"}
				luabfr@gmail.com
			</Paragraph>
		</Container>
	);
};

export default ScreenPrivatePolicy;
