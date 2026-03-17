import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const LogoContainer = styled.View`
	justify-content: center;
  align-items: center;
	height: 200px;
	margin: 0 20px 40px 20px;

	${Dimensions.get('window').height < 660 && `
    height: 140px;
  `}
`;

const ImageStyled = styled.Image`
	width: 160px;
  height: 160px;

	${Dimensions.get('window').height < 660 && `
    width: 100px;
  	height: 100px;
  `}

`;



const LogoMain = ()=>{

	return(
		<LogoContainer>
			<ImageStyled source={require('../../../assets/logo.png')} />
		</LogoContainer>
	)
}


export default LogoMain
