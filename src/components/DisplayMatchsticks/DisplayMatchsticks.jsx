import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayMatchsticksContainer,StickGroup,StickTop,StickRight,StickBottom,StickLeft,StickDiagonal } from './DisplayMatchsticks.styled';

const DisplayMatchsticks = ({ team }) => {
	const teamPoints = useSelector((state) => state.teamsReducer.teams[team].points)
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)
	const roundPoints = useSelector((state) => state.teamsReducer.matchConfiguration.roundPoints)
	const basePoints = 15;
	const isFullMatch = roundPoints > basePoints;
	const buenasActive = isFullMatch && teamPoints > basePoints;

	return (
		<>
			<DisplayMatchsticksContainer colorModeSelected={colorModeSelected} borderBottom>
				<StickGroup >
					<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > 0} buenas={buenasActive} />
					<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > 1} buenas={buenasActive} />
					<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > 2} buenas={buenasActive} />
					<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > 3} buenas={buenasActive} />
					<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > 4} buenas={buenasActive} />
				</StickGroup>

				<StickGroup buenas={buenasActive}>
					<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > 5} buenas={buenasActive} />
					<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > 6} buenas={buenasActive}/>
					<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > 7} buenas={buenasActive}/>
					<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > 8} buenas={buenasActive}/>
					<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > 9} buenas={buenasActive}/>
				</StickGroup>

				<StickGroup buenas={buenasActive}>
					<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > 10} buenas={buenasActive}/>
					<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > 11} buenas={buenasActive}/>
					<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > 12} buenas={buenasActive}/>
					<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > 13} buenas={buenasActive}/>
					<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > 14} buenas={buenasActive}/>
				</StickGroup>
			</DisplayMatchsticksContainer>



			{isFullMatch && (
				<DisplayMatchsticksContainer colorModeSelected={colorModeSelected}>
					<StickGroup>
						<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 0} />
						<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 1} />
						<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 2} />
						<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 3} />
						<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 4} />
					</StickGroup>

					<StickGroup>
						<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 5} />
						<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 6} />
						<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 7} />
						<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 8} />
						<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 9} />
					</StickGroup>

					<StickGroup>
						<StickTop colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 10} />
						<StickRight colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 11} />
						<StickBottom colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 12} />
						<StickLeft colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 13} />
						<StickDiagonal colorModeSelected={colorModeSelected} team={team} on={teamPoints > basePoints + 14} />
					</StickGroup>
				</DisplayMatchsticksContainer>
			)}

		</>
	);
};

export default DisplayMatchsticks
