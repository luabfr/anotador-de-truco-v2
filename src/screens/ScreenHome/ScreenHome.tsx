import React from 'react';
import ButtonCloseApp from '../../components/ButtonCloseApp/ButtonCloseApp';
import { MainButton } from '../../components/Button/Button.styled';
import LogoMain from '../../components/LogoMain/LogoMain';
import { MainContainer,MainButtonsWrap,MainAllBtns,AppNameTextL,AppNameTextR,AppNameTextWrap } from './ScreenHome.styled';
import { resetPoints } from '../../store/actions';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;



const HomeScreen = ({ navigation }: Props) => {
	const teamAPoints = useAppSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useAppSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useAppSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)

	const matchStarted = ((teamAPoints != 0) || (teamBPoints != 0)) ? true : false;

	const dispatch = useAppDispatch();
	const handleNewMatch = () => {
		dispatch(resetPoints());
		navigation.navigate('ScreenMatch')
	};


	return (
		<MainContainer colorModeSelected={colorModeSelected}>
			

			<AppNameTextWrap>
				<AppNameTextL colorModeSelected={colorModeSelected}>
					Anotador 
				</AppNameTextL>
				<AppNameTextR colorModeSelected={colorModeSelected}>
					{' '}de Truco
				</AppNameTextR>
			</AppNameTextWrap>
			<LogoMain /> 
			
			<MainAllBtns>
				<MainButtonsWrap colorModeSelected={colorModeSelected}>
					{matchStarted &&
						<MainButton 
							label="Volver a la partida" 
							onPress={() => navigation.navigate('ScreenMatch')} 
							borderBottom/>
					}
					<MainButton 
						label="Nueva partida" 
						onPress={() => handleNewMatch() } 
						borderBottom/>

					<MainButton 
						label={"Opciones"} 
						onPress={() => navigation.navigate('ScreenOptions')}/>
				</MainButtonsWrap>

				<ButtonCloseApp />		
			</MainAllBtns>	
		</MainContainer>
	);
	
}

export default HomeScreen
