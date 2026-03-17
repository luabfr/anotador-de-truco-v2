import React  from 'react';
import { View} from 'react-native';
import { useSelector } from 'react-redux';
import { TextPoints } from './DisplayPoints.styled';


const DisplayPoints = ({ team }) => {

	const teamPoints = useSelector((state) => state.teamsReducer.teams[team].points)
	const labelGoodOrBad = teamPoints > 15 ? "Buenas" : "Malas";
	// const labelGoodOrBadBool = teamPoints > 15 ? true : false;
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)


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
