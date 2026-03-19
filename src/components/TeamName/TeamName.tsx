import React from 'react';
import { TeamNameContainer,TNTitle } from './TeamName.styled';
import DisplayPoints from '../DisplayPoints/DisplayPoints';
import { useAppSelector } from '../../store/hooks';


type Props = {
	team: number;
};

const TeamName = ({ team }: Props) => {
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	const teamName = useAppSelector((state) => state.teamsReducer.teams[team].name);
	
	return (
		<TeamNameContainer>
			<TNTitle colorModeSelected={colorModeSelected}>{teamName}</TNTitle>
			<DisplayPoints team={team} />
		</TeamNameContainer>
	);
};

export default TeamName
