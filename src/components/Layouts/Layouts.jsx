import styled,{css} from 'styled-components/native';

function marginHandler({ m1,m0,mt1,mb,mb1 }) {
	return (
		(m0 && `margin: 0;`) ||
		(m1 && `margin: 16px;`) ||
		(mt1 && `margin-top: 16px;`) ||
		(mb1 && `margin-bottom: 16px;`) ||
		(mb && `margin-bottom: ${mb * 16}px;`) ||
		``
	);
}




export const Flex = styled.View`
  display: flex;
	flex-direction: ${(props) => props.row ? 'row': "column"};
	padding: ${(props) => props.p10 ? '10px' : props.p20 ? '20px' : '0px'};
	${marginHandler}
`;

export const MainApp = styled.View`
  flex: 1;
	background-color: ${props => props.bg ? props.bg : '#fff'};
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;
