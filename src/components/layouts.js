import React from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import '@fortawesome/fontawesome-free/css/all.css';

const Icon = (s) => {
  return (<i className={s.icon} ></i> )
}

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
    background-color: #f3f3f4;
    padding-right:15px;
    padding-left:15px;

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
    left : ${ props => {  return (props.state ? MoveFooter('50px') :  MoveFooter('220px'))  } };
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
const PageHeader = styled.div`
    border-bottom: 1px solid #e7eaec !important;
    border-bottom-color: rgb(231, 234, 236);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    margin-right: -15px;
    margin-left: -15px;
`;
const Btn = styled.a`
    background-color: #1ab394;
    border-color: #1ab394;
    color: #FFFFFF;
    border-radius: 3px;
    padding: 4px 12px;
    margin: 14px 5px 5px 20px;
    font-size: 14px;
    float: left;
    display: inline-block;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -moz-user-select: none;
    background-image: none;
    text-decoration: none;
`;

const LinkBtn = (props)=>{

    return ( <Btn onClick={props.onClick}><Icon icon='fa fa-bars'/></Btn>)

}


export  {Icon, MyDiv1,  MyDiv2, Footer,MenuWrapper, PageHeader, LinkBtn };
