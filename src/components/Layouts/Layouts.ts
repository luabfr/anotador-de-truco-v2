import styled from 'styled-components/native';

type MarginProps = {
	m1?: boolean;
	m0?: boolean;
	mt1?: boolean;
	mb?: number;
	mb1?: boolean;
};

function marginHandler({ m1,m0,mt1,mb,mb1 }: MarginProps) {
	return (
		(m0 && `margin: 0;`) ||
		(m1 && `margin: 16px;`) ||
		(mt1 && `margin-top: 16px;`) ||
		(mb1 && `margin-bottom: 16px;`) ||
		(mb && `margin-bottom: ${mb * 16}px;`) ||
		``
	);
}




type FlexProps = MarginProps & {
	row?: boolean;
	p10?: boolean;
	p20?: boolean;
};

export const Flex = styled.View<FlexProps>`
  display: flex;
	flex-direction: ${(props) => props.row ? 'row': "column"};
	padding: ${(props) => props.p10 ? '10px' : props.p20 ? '20px' : '0px'};
	${marginHandler}
`;

type MainAppProps = {
	bg?: string;
};

export const MainApp = styled.View<MainAppProps>`
  flex: 1;
	background-color: ${props => props.bg ? props.bg : '#fff'};
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;
