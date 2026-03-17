import React from 'react';
import ButtonCloseApp from '../../components/ButtonCloseApp/ButtonCloseApp';
import { MainButton } from '../../components/Button/Button.styled';
import LogoMain from '../../components/LogoMain/LogoMain';
import { MainContainer,MainButtonsWrap,MainAllBtns,AppNameTextL,AppNameTextR,AppNameTextWrap } from './ScreenHome.styled';
import { useSelector,useDispatch } from 'react-redux';
import { resetPoints } from '../../store/actions';


const HomeScreen = ({ navigation }) => {
	const teamAPoints = useSelector((state) => state.teamsReducer.teams[0].points)
	const teamBPoints = useSelector((state) => state.teamsReducer.teams[1].points)
	const colorModeSelected = useSelector((state) => state.teamsReducer.matchConfiguration.colorsPreset)

	const matchStarted = ((teamAPoints != 0) || (teamBPoints != 0)) ? true : false;

	const dispatch = useDispatch();
	const handleNewMatch = () => {
		dispatch(resetPoints());
		navigation.navigate('ScreenMatch')
	};


	return (
		<MainContainer colorModeSelected={colorModeSelected}>
			

			<AppNameTextWrap>
				<AppNameTextL>
					Anotador 
				</AppNameTextL>
				<AppNameTextR>
					{' '}de Truco
				</AppNameTextR>
			</AppNameTextWrap>
			<LogoMain /> 
			
			<MainAllBtns>
				<MainButtonsWrap>
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
