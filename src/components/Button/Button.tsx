import React , { FC } from 'react'
import { addPointsToTeam, removePointsToTeam } from '../../store/actions';
import { TheButton, ButtonLabel, ButtonAddPoints, ButtonRemovePoints } from './Button.styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


interface ButtonProps {
	teamId: number,
	title?: string, 
	addPoints?: boolean, 
	removePoints?: boolean,
	accessibilityLabel?: string,
	p0?: boolean,
}


const Button: FC<ButtonProps> = ({ teamId, title, addPoints, removePoints, accessibilityLabel }) => {
	const dispatch = useAppDispatch();
	const teamPoints = useAppSelector((state) => state.teamsReducer.teams[teamId].points);
	const matchPoints = useAppSelector((state) => state.teamsReducer.matchConfiguration.roundPoints);
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)



	const handlePress = () => {
		if (addPoints && teamPoints < matchPoints){
			dispatch(addPointsToTeam(teamId, 1));
		} else if (removePoints && teamPoints > 0){
			dispatch(removePointsToTeam(teamId, 1));
		}
	};

	return (
		<TheButton
			onPress={handlePress}
			colorModeSelected={colorModeSelected}
			accessibilityLabel={accessibilityLabel}
		>
			{addPoints && 
				<ButtonAddPoints colorModeSelected={colorModeSelected} />
			}
			{removePoints &&
				<ButtonRemovePoints colorModeSelected={colorModeSelected} />
			}
			{(!addPoints && !removePoints && title) &&
				<ButtonLabel colorModeSelected={colorModeSelected}>{title}</ButtonLabel>
			}
			
		</TheButton>
	);
};

export default Button;


