import React from 'react';
import styled , { keyframes } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import '@fortawesome/fontawesome-free/css/all.css';

const showFade = keyframes`
  from { opacity : 0; }
  to{ opacity : 1; }
`;
const hideFade = keyframes`
  from { opacity : 1; }
  to{ opacity : 1;}
`;

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
    background-color: #FFFFFF;
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
    color: #FFFFFF !important;
    border-radius: 3px;
    padding: 4px 12px
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
    :hover {
      color: red;
      background-color: #75c1b2;
    }

`;
const WrapperContent = styled.div`
    padding-top: 20px;
    padding-right: 10px;
    padding-bottom: 40px;
    padding-left: 10px;

`;

const Div = styled.div``;

const IBox = styled.div`
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
    ::after{
      display: table;
    }
    ::before{
      display: table;
    }
`;
const IBoxTitle = styled.div`
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 2px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 15px 15px 7px;
    min-height: 48px;

  ::after{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  ::before {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
  }

`;

const anime1 = (s) => {

  anime({
         targets: document.getElementById(s.id),
         height: ()=> {
             return s.params.height;
         }
     });


}
const anime2 = (s) => {
  anime({
       targets: document.getElementById(s.id),
       height: '0px',

   });
}
const IBoxContent = styled.div`
    clear: both;
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
    width : 100%;
    height : ${props=> {  return ( props.params.state ? anime1(props) :  anime2(props) ) } };
    display : ${props=> {  return ( props.params.state ? 'inline-block' :  'none' ) } };
    animation: ${props => props.params.state ? showFade : hideFade} ;
    animation-duration: 1.5s;
    animation-timing-function : ease-out;
`;
const IBoxTools = styled.div`
    display: block;
    float: none;
    margin-top: 0;
    position: relative;
    padding: 0;
    text-align: right;

    ::after{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ::before {
       -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
       box-sizing: border-box;
    }

`;
const IBoxToolLink = styled.a`
      cursor: pointer;
      margin-left: 5px;
      color: #c4c4c4;
      text-decoration: none;
      background-color: transparent;
      text-align: right;

`;
const Label = styled.span`
    margin-left: 4px;
    font-size: 10px;
    background-color: #1c84c6;
    color: #FFFFFF;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
    padding: 3px 8px;
    text-shadow: none;
    float: right !important;
    display: inline;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
      ::after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
      }
       ::before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
      }

`;
const TableWrapper = styled.div`
    overflow-y: scroll;
    height:400px;

`;
const H5 = styled.h5`
  display: inline-block;
  font-size: 14px;
  font-family: inherit;
  margin: 0 0 7px;
  padding: 0;
  text-overflow: ellipsis;
  float: left;
  font-weight: 600;
  line-height: 1.1;
  color: inherit;
`;


const LinkBtn = (props)=>{

    return ( <Btn onClick={props.onClick}><Icon icon={ props.state ? 'fa fa-arrow-right' :'fa fa-arrow-left'}  /></Btn>)

}


export  {Icon, MyDiv1,  MyDiv2, Footer,MenuWrapper, PageHeader, LinkBtn, WrapperContent, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink, TableWrapper};
