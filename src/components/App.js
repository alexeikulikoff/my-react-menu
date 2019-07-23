import React, {useState, useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-metismenu/dist/react-metismenu-standart.min.css';
import logo from './logo.svg';
import './App.css';

import styled, { keyframes } from 'styled-components';

import MetisMenu from 'react-metismenu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faAd } from '@fortawesome/free-solid-svg-icons';

import { fadeIn, fadeOut, bounce, snake } from 'react-animations';
import '@fortawesome/fontawesome-free/css/all.css';

library.add(fab, faCheckSquare, faCoffee, faAd);

const fadeOutAnime = keyframes`${fadeOut}`;
const fadeInAnime = keyframes`${fadeIn}`;
const snakeAnime   = keyframes`${snake}`;



const content= [
    {
        id : 1,
        icon:  'fa fa-bell fa-xs',
        label: 'Dashboard',
        to: '#a-link1',
        active : false,
    },
    {
        id : 2,
        icon:  'fab fa-adn fa-xs',
        label: 'Layouts',
        to: '#a-link2',
        active : false,
    },
    {
        id : 3,
        icon:  'fab fa-airbnb fa-xs',
        label: 'Graphs',
        to: '#a-link3',
        active : false,
        content: [
            {
                id : 4,
                icon: 'anchor',
                label: 'Float Chart',
                to: '#another-link',
            },
            {
                id : 5,
                icon: 'fas fa-allergies fa-xs',
                label: 'Pie Chart',
                to: '#another-link',
            }
        ]
    },
    {
        id : 6,
        icon: 'fab fa-angellist fa-xs',
        label: 'Mailbox',
        active : false,
        content: [
            {
                id : 7,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 11',
                to: '#another-link',
            },
        ],
    },
];

const MyBell = styled.div`

`;
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

const showFade = keyframes`
  from {
    opacity : 0;
  }
  to{
      opacity : 1;
  }

`;
const hideFade = keyframes`
  from {
    opacity : 1;
  }
  to{
      opacity : 1;
  }

`;
const  MenuLink = styled.a`
    padding: 4px 7px 4px 15px;
    position: relative;
    cursor: pointer;
    background-color: transparent;
`;

const MenuLabel = styled.span`
    padding-left : 12px;
    display : ${ props => ( props.state ? 'none' : 'inline-block')};
    animation: ${props => props.state ? hideFade : showFade} 1.2s linear;
    animation-duration: 2.5s;
    animation-timing-function : ease-out;

`;
const MenuLabelStatic =  styled.span`
    padding-left : ${props => { console.log(props); return (props.state ? '5px' : '25px')}};
    padding-right : 10px;
    display : ${ props => ( props.state ? 'none' : 'inline-block')};
`;
const Ia = (s)=>{
  return (s.prop.hasOwnProperty("content") ? ( s.prop.active ? <i class="fas fa-angle-down"></i> : <i class="fas fa-angle-left"></i>) : null);
}
const ArrowSpan = styled.span`

    display : ${props => ( props.state ? 'none' : 'inline-block')};
    animation: ${props => props.state ? hideFade : showFade} 1.2s linear;
    float : right;
    width : 3em;
    text-align : center;
`;
const Item = styled.li`
    border-left: ${props => ( props.active ? '4px solid #f01d1d' : 'inherit')}; ;
    color : #b1c4c6;
    :hover {
      color: #fafeff;
      background-color: #1f4850;
      cursor: pointer;
    };
`;
const tgIcon = (v,icon)=>{
    return v ? icon.replace('fa-xs', 'fa-lg') : icon.replace('fa-lg', 'fa-xs');
 }
const click_item = (u)=> {
   console.log(u.target.offsetHeight);
 }


 const ContentHook = (prop,v) => {

     const [content, toggleContent] = useState(prop);

     const toggle = (p)=>{

       let arr =  prop.map((s,i) => {
         if (s.id === p) {
            s["active"] = !s["active"];
         }else{
            s["active"] = false;
         }
         return s;
       });
      // console.log(arr[2].active);
       return { prop : arr };
     }
     return {
       content,
       toggleSubMenu : useCallback((s)=> toggleContent( toggle(s) ),v)
     }

 }

const MenuDiv = styled.div`

    background-color: #255761;
    position: absolute;
    left : 45px;
    top : ${props=>props.top}px ;
    max-height: 500px;
    transition: max-height 0.25s ease-in;

`;
const MenuItem = (v) =>{

  const [top, setTop] = useState(0);

  const {content, toggleSubMenu} = ContentHook(v.prop.content);

  const toggleSubMenu2 = (id,u) => {
   let top = window.scrollY + u.target.getBoundingClientRect().top ;
   toggleSubMenu(id);
   setTop( top );

  }
  const Submenu = (s)=>{
    if (s.prop.hasOwnProperty("content") & s.prop.active){

      if (!v.prop.state) {
        return (
          <>
          <UL>
           {s.prop.content.map((u,j)=>{
            return (
                <React.Fragment>
                  <Item active={s.prop.active} onClick={toggleSubMenu2.bind(null,u.id)}><MenuLink><MenuLabelStatic state={v.prop.state}>{u.label}</MenuLabelStatic></MenuLink></Item>
                </React.Fragment>)
           })}
         </UL>
         </>
        )
      }
      else{

        return (
          <>
          <MenuDiv top={top}>
            <UL>
             {s.prop.content.map((u,j)=>{
              return (
                  <React.Fragment>
                    <Item state={v.prop.state} onClick={toggleSubMenu2.bind(null,s.id)}><MenuLink><MenuLabelStatic state={!v.prop.state}>{u.label}</MenuLabelStatic></MenuLink></Item>
                  </React.Fragment>)
             })}
           </UL>
          </MenuDiv>
          </>
        )
      }

    }else{
      return null;
    }
  }

  return (
    <>
    <UL>
    {v.prop.content.map((s,i) => {
      return (
        <React.Fragment>
        <Item active={s.active} onClick={toggleSubMenu2.bind(null,s.id)}><MenuLink><Icon icon={ tgIcon(v.prop.state,s.icon) } /><MenuLabel state={v.prop.state}>{s.label}</MenuLabel><ArrowSpan state={v.prop.state} ><Ia prop={s}/></ArrowSpan></MenuLink></Item>
        {  <Submenu prop={s}/>  }
        </React.Fragment>
        )
    })}
    </UL>
    </>
  )
}

const Icon = (s) => {
  return (<i className={s.icon} ></i> )
}
const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;


const Footer = styled.div`
    background: none repeat scroll 0 0 white;
    border-top: 1px solid #e7eaec;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    position: absolute;
    right: 0;

`;

const toggleMenu = () => {
  console.log('toggle');
}
const  App = () => {

  const [state, setState] = useState( false );

//  useEffect(() => {}, [state]);

let body = document.body,
    html = document.documentElement;

let h = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


  return (
  <>
    <MyDiv1 state={{state, h}}>
    <MenuWrapper ><MenuItem prop= {{content, state}}/></MenuWrapper>
    </MyDiv1>



    <MyDiv2 state={state}>
    <button onClick={(s)=>setState(!state)} >|||</button>

No otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or.

Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.
Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        ty. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
</MyDiv2>

<button onClick={toggleMenu} > Toggle Menu</button>
 <Footer ><div> <p>Hello</p></div></Footer>

</>
  );
}

export default App;
