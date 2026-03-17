import styled , {css} from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colorTheme } from '../colorTheme';


// Obtén las dimensiones de la pantalla
const windowDimensions = Dimensions.get('window');
// Altura total de la pantalla
const screenHeight = windowDimensions.height;



export const DisplayMatchsticksContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	margin-top: 20px;
	margin-left: 40px;
	margin-right: 40px;
	
	${props => props.borderBottom && css`
		border-bottom-width: 2px;
		border-bottom-color: ${colorTheme.mode[props.colorModeSelected].grayButtons}; 
	`};
	
`;


export const StickGroup = styled.View`
	display: flex;
	position: relative;
	width: ${screenHeight*0.06}px;
	height: ${screenHeight*0.06}px;	
	margin-bottom: ${screenHeight * 0.03}px;
	border-radius: 4px;
	overflow: hidden;
`;

export const StickTop = styled.View`
	display: flex;
	position: relative;
	top: 0;
	width: 100%;
	height: 5px;		
	z-index: 10;
	background-color: ${props => (props.on ? `${colorTheme.mode[ props.colorModeSelected ].sticksTeamColor[ props.team ]}` : '#0000')};

	${props => (props.buenas && `
		background: ${colorTheme.mode[props.colorModeSelected].sticksTeamColorDark[props.team]}
	`)};
	
`;

export const StickRight = styled.View`
	display: flex;
	width: 5px;
	height: 100%;		
	position: absolute;
	right: 0;
	z-index: 9;
	background-color: ${props => (props.on ? `${colorTheme.mode[props.colorModeSelected].sticksTeamColor[props.team]}` : '#0000')};
	${props => (props.buenas && `
		background: ${colorTheme.mode[props.colorModeSelected].sticksTeamColorDark[props.team]}
	`)};
`;

export const StickBottom = styled.View`
	display: flex;
	width: 100%;
	height: 5px;		
	position: absolute;
	bottom: 0;
	z-index: 8;
	background-color: ${props => (props.on ? `${colorTheme.mode[props.colorModeSelected].sticksTeamColor[props.team]}` : '#0000')};
	${props => (props.buenas && `
		background: ${colorTheme.mode[props.colorModeSelected].sticksTeamColorDark[props.team]}
	`)};
`;

export const StickLeft = styled.View`
	display: flex;
	width: 5px;
	height: 100%;		
	position: absolute;
	left: 0;
	z-index: 7;
	background-color: ${props => (props.on ? `${colorTheme.mode[props.colorModeSelected].sticksTeamColor[props.team]}` : '#0000')};
	${props => (props.buenas && `
		background: ${colorTheme.mode[props.colorModeSelected].sticksTeamColorDark[props.team]}
	`)};
`;

export const StickDiagonal = styled.View`
	display: flex;
	width: 5.5px;
	height: 125%;	
	position: absolute;

	transform: translateX(-2.75px) rotate(-45deg);
	top: -5px;
	left: 49%;
	z-index: 6;

	background-color: ${props => (props.on ? `${colorTheme.mode[props.colorModeSelected].sticksTeamColor[props.team]}` : '#0000')};
	${props => (props.buenas && `
		background: ${colorTheme.mode[props.colorModeSelected].sticksTeamColorDark[props.team]}
	`)};
`;
