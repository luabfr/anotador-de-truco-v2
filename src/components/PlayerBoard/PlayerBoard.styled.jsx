// import { View } from 'react-native';
import styled from 'styled-components/native';
import { colorTheme } from '../colorTheme';

export const PlayerBoardContainer = styled.View`
  display: flex;
	flex: 1;
	position: relative;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].bg}` };
	border-right-width: ${(props) => props.borderRight ? "1px": '0'}; /* color por defecto si no se proporciona la prop */
  border-right-color: ${ props => `${colorTheme.mode[props.colorModeSelected].grayButtons}` };
`;

export const ButtonsContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 20px;
	position: absolute;
	bottom: 0;
	width: 100%;
`;

