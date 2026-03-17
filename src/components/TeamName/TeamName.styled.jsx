import styled from 'styled-components/native';
import { colorTheme } from '../colorTheme';

export const TeamNameContainer = styled.View`
  display: flex;
	justify-content: center;	
	padding-left: 20%;	
`;

export const TNTitle = styled.Text`
	font-size: 32px;
	font-weight: bold;
	/* fontFamily: 'Poppins-Bold';*/
	color: ${ props => `${colorTheme.mode[props.colorModeSelected].text1}` };
  display: flex;
	justify-content: flex-start;	
`;
