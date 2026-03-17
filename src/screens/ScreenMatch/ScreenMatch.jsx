import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { MainApp } from '../../components/Layouts/Layouts';
import MatchBoard from '../../components/MatchBoard/MatchBoard';
import { colorTheme } from '../../components/colorTheme';

const ScreenMatch = ({ navigation }) => {
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset);
	const screenBg = colorTheme.mode[colorModeSelected].bg;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: screenBg }} edges={['top', 'left', 'right']}>
			<MainApp bg={screenBg}>
				<MatchBoard />
			</MainApp>
		</SafeAreaView>
		
	);
}

export default ScreenMatch
