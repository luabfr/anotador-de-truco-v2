import React, { useEffect, useState } from 'react';
import PlayerBoard from '../PlayerBoard/PlayerBoard';
import { useNavigation } from '@react-navigation/native';
import { MBContainer,ModalWrap,ModalButtons,ModButtonLabel,WinnersText1,WinnersText2,WinnersText3,ModWinnersGroup,ModSvgWrap,ModButtonsWrapper,OptionsButton,OptionsButtonLabel } from './MatchBoard.styled';
import { resetPoints, removePointsToTeam } from '../../store/actions';
import { colorTheme } from '../colorTheme';
import CupSvg from '../CupSvg/CupSvg';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const MatchBoard = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const teamAPoints = useAppSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useAppSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	const roundPoints = useAppSelector((state) => state.teamsReducer.matchConfiguration.roundPoints)


	
	
	const [forceBoardView, setForceBoardView] = useState(false);
	const hasWinnerByPoints = ((teamAPoints >= roundPoints) || (teamBPoints >= roundPoints)) ? true : false;
	let weHaveAWinner = hasWinnerByPoints && !forceBoardView;
	// weHaveAWinner = true
	let winnerIsTeamA = ( teamAPoints >= roundPoints ) ? true : false;
	let labelForWinner1 = winnerIsTeamA ? `Ganamos` : `Ganaron` ;
	let labelForWinner2 = winnerIsTeamA ? `${teamAPoints} a ${teamBPoints}` : `${teamBPoints} a ${teamAPoints}`;
	let labelForWinner3 = winnerIsTeamA ? `NOSOTROS` : `ELLOS`;

	let winnerColor = winnerIsTeamA
		? colorTheme.mode[colorModeSelected].sticksTeamColor[0]
		: colorTheme.mode[colorModeSelected].sticksTeamColor[1];
	
	useEffect(() => {
		if (!hasWinnerByPoints && forceBoardView) {
			setForceBoardView(false);
		}
	}, [hasWinnerByPoints, forceBoardView]);

	const dispatch = useAppDispatch();
	const handleSeeBoardButton = () => {
		setForceBoardView(true);

		if (teamAPoints >= roundPoints) {
			dispatch(removePointsToTeam(0, 1));
		}

		if (teamBPoints >= roundPoints) {
			dispatch(removePointsToTeam(1, 1));
		}
	}

	const handleResetButton = () => {
		setForceBoardView(false);
		dispatch(resetPoints());
	};

	const handleOptionsPress = () => {
		navigation.navigate('ScreenOptions');
	};

	return (
		<MBContainer>
			{!weHaveAWinner &&
				<>
					<PlayerBoard team={0} borderRight={true} />
					<PlayerBoard team={1}  />
					<OptionsButton colorModeSelected={colorModeSelected} onPress={handleOptionsPress}>
						<OptionsButtonLabel colorModeSelected={colorModeSelected}>OPC</OptionsButtonLabel>
					</OptionsButton>
				</>
			}

			{weHaveAWinner &&
				<ModalWrap colorModeSelected={colorModeSelected}>


					
					{/* Absolute: Top */}
					<ModButtonsWrapper colorModeSelected={colorModeSelected}>
						{/* Nueva partida */}
						<ModalButtons
							borderBottom={true}
							onPress={handleResetButton}
							colorModeSelected={colorModeSelected}>
							<ModButtonLabel colorModeSelected={colorModeSelected}>
								{"Nueva partida"}
							</ModButtonLabel>
						</ModalButtons>

						
						<ModalButtons
							onPress={handleSeeBoardButton}
							colorModeSelected={colorModeSelected}>
							<ModButtonLabel colorModeSelected={colorModeSelected}>
								{"Volver al tablero"}
							</ModButtonLabel>
						</ModalButtons>

					</ModButtonsWrapper> 




					<ModWinnersGroup>
						
						<WinnersText1 colorModeSelected={colorModeSelected}>  
							{labelForWinner1} 
						</WinnersText1>
						
						<ModSvgWrap> 
							<CupSvg winnerColor={winnerColor} />
						</ModSvgWrap>

					
						<WinnersText2 color={winnerColor}>
							{labelForWinner3}
						</WinnersText2>

						<WinnersText3 colorModeSelected={colorModeSelected} color={winnerColor}>
							{labelForWinner2}
						</WinnersText3>
					</ModWinnersGroup>
					
					

				</ModalWrap>
				
			}
			
		</MBContainer>
	);
};

export default MatchBoard
