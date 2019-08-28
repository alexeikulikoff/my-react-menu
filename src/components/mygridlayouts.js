import React from 'react';
import styled , { keyframes } from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import '@fortawesome/fontawesome-free/css/all.css';
import bgimage from './images/ui-bg_flat_0_aaaaaa_40x100.png';
import bgffffff from './images/ui-bg_flat_75_ffffff_40x100.png';

const showFade = keyframes`
  from { opacity : 0; }
  to{ opacity : 1; }
`;
const hideFade = keyframes`
  from { opacity : 1; }
  to{ opacity : 1;}
`;


const MyGridWrapper = styled.div`

`;
const MyGriHeader = styled.div`

`;
const MyGridBody = styled.div`
    overflow-y: scroll;
    height:  400px;

`;

const UIWidgetOverlay = styled.div`

    background-color: rgb(170, 170, 170);
    background-position-x: 50%;
    background-position-y: 50%;
    background-repeat: repeat-x;
    background-attachment: scroll;
    background-image: url(${bgimage});
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 949;
    opacity: 0.3;
    display : ${props=> {  return ( props.params.state ? 'inline-block' :  'none' ) } };

`;
const MyEditFormDiv = styled.div`
    ::after, ::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    z-index: 950;
  
    overflow: hidden;
    display : ${props=> {  return ( props.params.state ? 'block' :  'none' ) } };
    border: 1px solid #ddd;
    border-radius: 0px;
    box-sizing: content-box;
    position: absolute;
    padding: .2em;
    font-size: 13px;
    background: #fff url(${bgffffff}) 50% 50% repeat-x;
    color: #222;
    font-family: Verdana,Arial,sans-serif;
    line-height: 1.42857143;

`;
const MyEditFormTitle  = styled.div`
    ::after, ::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    cursor: move;
    padding: 10px 10px;
    position: relative;
    border-radius: 0px;
    background: none;
    background-image: none;
    background-color: #f5f5f6;
    text-transform: uppercase;
    border: 1px solid #aaa;
    color: #222;
    font-weight: bold;
    box-sizing: border-box;

`;
const MyEditFormTitleText = styled.span`
    float: none !important;
    margin: .1em 0 .2em;
`;
const MyEditFormContent = styled.div`
    ::after, ::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    border: 0;
    padding: .3em .2em;
    background: none;
    height: auto;
    box-sizing: content-box;
    color: #222;

`;
const MyGridFooter = styled.span`

`

export  { UIWidgetOverlay,MyGridFooter,MyEditFormDiv, MyGridBody, MyGriHeader,MyGridWrapper,MyEditFormTitle, MyEditFormContent, MyEditFormTitleText }
