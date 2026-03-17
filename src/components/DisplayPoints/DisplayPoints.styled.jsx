import styled from 'styled-components/native';
import { colorTheme } from '../colorTheme';

export const TextPoints = styled.Text`
  font-size: 24px;
	font-weight: 500;	
	/* font-family: 'Poppins-Light';*/

	color: ${props => (props.labelGoodOrBadBool ? `${colorTheme.mode[props.colorModeSelected].sticksTeamColor[props.team]}` : `${colorTheme.mode[props.colorModeSelected].text2}`)} ;	 
	text-align: left;
`;
