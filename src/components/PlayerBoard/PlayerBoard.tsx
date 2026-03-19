import React from 'react';
import Button from '../Button/Button';
import { PlayerBoardContainer,ButtonsContainer } from './PlayerBoard.styled';
import TeamName from '../TeamName/TeamName';
import DisplayMatchsticks from '../DisplayMatchsticks/DisplayMatchsticks';
import { useAppSelector } from '../../store/hooks';

type Props = {
	team: number;
	borderRight?: boolean;
};

const PlayerBoard = ({ team,borderRight }: Props) => {
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	
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
