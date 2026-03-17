import styled, {css} from 'styled-components/native';
import { colorTheme } from '../../components/colorTheme';

export const MainContainer = styled.View`
	display: flex;
	flex:1;
	/* height: 100%; */
	flex-direction: column;
	background: ${ props => `${colorTheme.mode[props.colorModeSelected].bg}` };
	padding: 40px 20px;
`;

export const MainAllBtns = styled.View`
	display: flex;
	flex:1;
	justify-content: space-between;
`



export const AppNameTextWrap = styled.View`
	/* width: 60%;+ */
	margin: 20px 0;
	align-self: center;
	padding-bottom: 10px;	
	border-bottom-width: 1px;
	/* border-bottom-color: #333; */
	display: flex;
	flex-direction: row;
	justify-content: center;
`
export const AppNameTextL = styled.Text`
	font-size: 20px;
	color: ${ `${colorTheme.mode[0].sticksTeamColor[0]}` };
	text-transform: uppercase;
	text-align: center;
	font-weight: 600;

`
export const AppNameTextR = styled.Text`
	font-size: 20px;
	color: ${ `${colorTheme.mode[0].sticksTeamColor[1]}` };
	text-transform: uppercase;
	text-align: center;	
	font-weight: 600;
`

export const MainButtonsWrap = styled.View`
	border-width: 1px;
	border-color: #333;
	border-radius: 5px;
	padding: 0 20px;
	
	${props =>
		(props.width100 && css`					
			width: 100%;
    `)
  };
`
