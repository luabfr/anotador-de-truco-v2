import React from 'react';
import Button from '../Button/Button';
import { PlayerBoardContainer,ButtonsContainer } from './PlayerBoard.styled';
import TeamName from '../TeamName/TeamName';
import DisplayMatchsticks from '../DisplayMatchsticks/DisplayMatchsticks';
import { useSelector } from 'react-redux';

const PlayerBoard = ({ team,borderRight }) => {
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	
	return (
		<PlayerBoardContainer colorModeSelected={colorModeSelected} borderRight={borderRight}>
			<TeamName team={team} />
			<DisplayMatchsticks team={team} />
			<ButtonsContainer>
				<Button teamId={team} accessibilityLabel="Restar puntos" p0 removePoints />
				<Button teamId={team} accessibilityLabel="Sumar puntos" p0 addPoints />
			</ButtonsContainer>
			
		</PlayerBoardContainer>
	);
};

export default PlayerBoard
