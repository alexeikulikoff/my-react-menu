import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';


const MoveDiv1 = (s)=>{
  anime({
      targets: document.getElementById('d1'),
      width: s
  });
}
const MoveDiv2 = (s) => {
  anime({
      targets: document.getElementById('d2'),
      marginLeft: s
  });
}


const MyDiv1 = styled.div`
    line-height: 2.5em;
    width: ${props => {  return (props.state.state ? ()=> MoveDiv1('50px'):()=> MoveDiv1('220px')) } };
    float:left;
    height: ${props=> ( props.state.height + 'px')};
    max-height :${props=> ( props.state.height + 'px')};
    background-color: #255761;
    display : block;

`;

const MyDiv2 = styled.div`
    margin-left: ${ props => ( props.state ? ()=> MoveDiv2('50px') : ()=> MoveDiv2('220px')  ) };
    background-color: #a6cbe6;

`;
const MoveFooter = (s) => {
  anime({
      targets: document.getElementById('footer'),
      left: s
  });
}
const Footer = styled.div`

    background: none repeat scroll 0 0 red;
    border-top: 1px solid #e7eaec;
    position: absolute;
    bottom: 0px;
    left : ${ props => { console.log(props); return (props.state ? MoveFooter('50px') :  MoveFooter('220px'))  } };
    right: 0;
    padding: 10px 20px;

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

export  { MyDiv1,  MyDiv2, Footer,MenuWrapper };
