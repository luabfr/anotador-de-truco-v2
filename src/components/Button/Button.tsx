import React , { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPointsToTeam, removePointsToTeam } from '../../store/actions';
import { TheButton, ButtonLabel, ButtonAddPoints, ButtonRemovePoints } from './Button.styled';


interface ButtonProps {
	teamId: number,
	title: string, 
	addPoints: boolean, 
	removePoints: boolean,
}


const Button: FC<ButtonProps> = ({ teamId, title, addPoints, removePoints  }) => {
	const dispatch = useDispatch();
	const teamPoints = useSelector((state) => state.teamsReducer.teams[teamId].points);
	const matchPoints = useSelector((state) => state.teamsReducer.matchConfiguration.roundPoints);
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)



	const handlePress = () => {
		if (addPoints && teamPoints < matchPoints){
			dispatch(addPointsToTeam(teamId, 1));
		} else if (removePoints && teamPoints > 0){
			dispatch(removePointsToTeam(teamId, 1));
		}
	};

	return (
		<TheButton onPress={handlePress} colorModeSelected={colorModeSelected}>
			{addPoints && 
				<ButtonAddPoints colorModeSelected={colorModeSelected} />
			}
			{removePoints &&
				<ButtonRemovePoints colorModeSelected={colorModeSelected} />
			}
			{(!addPoints && !removePoints) &&
				<ButtonLabel colorModeSelected={colorModeSelected}>{title}</ButtonLabel>
			}
			
		</TheButton>
	);
};

export default Button;


