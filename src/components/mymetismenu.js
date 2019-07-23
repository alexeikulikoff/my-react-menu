import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-metismenu/dist/react-metismenu-standart.min.css';
import styled, { keyframes } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

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
const MenuWrapper = styled.div`
    list-style: none;
    width: 100%;
    background-color: #255761;
    bottom: 0;
    left: 0;
    top: 0;
    overflow: hidden;
`;

const MenuLink = styled.a`
    padding: 4px 7px 4px 15px;
    position: relative;
    cursor: pointer;
    background-color: transparent;
`;

const MenuLabel = styled.span`
    padding-left : 12px;
    display : ${ props => ( props.state ? 'none' : 'inline-block')};
    animation: ${props => { console.log(props.state); if (props.state){ return ( hideFade ) } else {return ( showFade )} } };
    animation-duration: 2.4s;
    animation-timing-function : linear;

`;
const MenuLabelStatic =  styled.span`
    padding-left : ${props => { console.log(props); return (props.state ? '5px' : '25px')}};
    padding-right : 10px;
    display : ${ props => ( props.state ? 'none' : 'inline-block')};
`;
const Ia = (s)=>{
  return (s.prop.hasOwnProperty("content") ? ( s.prop.active ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-left"></i>) : null);
}
const ArrowSpan = styled.span`

    display : ${props => ( props.state ? 'none' : 'inline-block')};
    animation: ${props => props.state ? hideFade : showFade} 1.2s linear;
    float : right;
    width : 3em;
    text-align : center;
`;
const Item = styled.li`
    border-left: ${props => ( props.active ? '4px solid #19aa8d' : 'inherit')}; ;
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
       toggleSubMenu : (s)=> toggleContent( toggle(s) )
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
const Icon = (s) => {
  return (<i className={s.icon} ></i> )
}

const MenuItem = (v) =>{

  const UL = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
  `;

  const [top, setTop] = useState(0);

  const { toggleSubMenu } = ContentHook(v.prop.content);

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
        <Item  active={s.active} onClick={toggleSubMenu2.bind(null,s.id)}><MenuLink><Icon icon={ tgIcon(v.prop.state,s.icon) } /><MenuLabel state={v.prop.state}>{s.label}</MenuLabel><ArrowSpan state={v.prop.state} ><Ia prop={s}/></ArrowSpan></MenuLink></Item>
        {  <Submenu prop={s}/>  }
        </React.Fragment>
        )
    })}
    </UL>
    </>
  )
}

export { MenuItem , MenuWrapper }
