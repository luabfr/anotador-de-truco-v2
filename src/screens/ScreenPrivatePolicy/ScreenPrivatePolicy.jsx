import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(ScrollView)`
	flex: 1;
	background-color: #111;
	padding: 20px;
`;

const Title = styled(Text)`
	font-size: 24px;
	font-weight: 700;
	color: #fff;
	margin-bottom: 16px;
`;

const Paragraph = styled(Text)`
	font-size: 16px;
	line-height: 24px;
	color: #ddd;
	margin-bottom: 12px;
`;

const ScreenPrivatePolicy = () => {
	return (
		<Container>
			<Title>Politica de Privacidad de la aplicacion Anotador de Truco</Title>
			<Paragraph>Ultima actualizacion: 05/03/2026</Paragraph>
			<Paragraph>
				Esta aplicacion no recopila informacion personal identificable de forma directa.
				Puede incluir servicios de terceros (como publicidad) que procesen datos tecnicos
				del dispositivo para diagnostico y rendimiento.
			</Paragraph>
			<Paragraph>
				Los datos procesados por terceros pueden incluir direccion IP, identificadores del
				dispositivo, datos de uso y eventos vinculados a anuncios.
			</Paragraph>
			<Paragraph>
				No se venden datos personales. El procesamiento por terceros se limita a fines
				operativos, analiticos y publicitarios.
			</Paragraph>
			<Paragraph>
				Si tenes consultas sobre esta politica, podes contactarte por correo a:{"\n"}
				luabfr@gmail.com
			</Paragraph>
		</Container>
	);
};

export default ScreenPrivatePolicy;
