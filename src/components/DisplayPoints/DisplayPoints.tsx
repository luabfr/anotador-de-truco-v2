import React  from 'react';
import { View} from 'react-native';
import { TextPoints } from './DisplayPoints.styled';
import { useAppSelector } from '../../store/hooks';


type Props = {
	team: number;
};

const DisplayPoints = ({ team }: Props) => {

	const teamPoints = useAppSelector((state) => state.teamsReducer.teams[team].points)
	const labelGoodOrBad = teamPoints > 15 ? "Buenas" : "Malas";
	// const labelGoodOrBadBool = teamPoints > 15 ? true : false;
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)


	return (
		<View>
			<TextPoints 
				labelGoodOrBadBool={teamPoints > 15} 
				colorModeSelected={colorModeSelected}
				team={team}>
				{teamPoints} {labelGoodOrBad} 
			</TextPoints>
		</View>
	);
};

export default DisplayPoints
