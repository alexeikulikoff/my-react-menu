import styled from 'styled-components';

const MyDiv1 = styled.div`
    line-height: 2.5em;
    width: ${ props => ( props.state.state ? '50px' : '240px'  ) };
    float:left;
    height: ${ props=> ( props.state.h + 'px')};
    max-height : 200em;
    background-color: #255761;
    transition: all 0.45s;
    display : block;
`;

const MyDiv2 = styled.div`
    margin-left: ${ props => ( props.state ? '50px' : '240px'  ) };
    background-color: #29ecf2;
    transition: all 0.45s;
`;

const MenuWrapper = styled.div`
    list-style: none;
    width: 100%;
    background-color: #255761;
    bottom: 0;
    left: 0;
    top: 0;
    overflow: hidden;

`;

export  { MyDiv1,  MyDiv2, MenuWrapper };
