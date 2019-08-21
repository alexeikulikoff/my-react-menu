import React, {useState, useRef, useEffect} from 'react';
import styled , { keyframes } from 'styled-components';
import {Icon, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink,TableWrapper} from './layouts';
import uuidv4 from 'uuid/v4';

import './MyGrid.css';

const MyGridWrapper = styled.div`
    color: inherit;
    ::after, ::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
     box-sizing: border-box;
  }
`;
const MyGridView = styled.div`
    position: relative;
    left: 0;
    top: 0;
    padding: 0;
    font-size: 11px;
    color: #222;
`;
const MyGridTitle = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 0;
    position: relative;
    border-left: 0 solid;
    border-right: 0 solid;
    border-top: 1px solid #ddd;
    text-align: left;
    font-size: 12px;
    background: none;
    background-image: none;
    background-color: #f5f5f6;
    text-transform: uppercase;
`;
const MyGridTitleSpan = styled.span`
    line-height: 15px;
    color: #676a6c;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    font-weight: bold;
`

const MyGridDefaultState = styled.div`
background: #F9F9F9;
border: 1px solid #DDDDDD;
line-height: 15px;
font-weight: bold;
color: #676a6c;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
position: relative;
margin: 0;
padding: 0;
overflow-x: hidden;

box-sizing: border-box;
font-size: 11px;

`;

const MyGridBox = styled.div`
    float: left;
    padding-right: 20px;
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
`;
const MyGrid = (s) => {
  const [params, setParams] = useState({"state" : true, "height": "auto", "id" :  uuidv4()});

   const click_me = (s)=>{
     setParams( ()=>{
         let h = document.getElementById( params.id ).offsetHeight + 'px' ;
         return {"state": !params.state, "height": params.state ? h:  params.height , "id" : params.id }
     });
   }



  return (
    <>
    <IBox>
      <IBoxTitle><IBoxTools><H5>{s.title}</H5><IBoxToolLink onClick={click_me}>
          <Icon icon={params.state ? 'fa fa-chevron-up' :'fa fa-chevron-down'}/>
           </IBoxToolLink>
       </IBoxTools>
    </IBoxTitle>
    <IBoxContent params={params} id={params.id}>
    <MyGridWrapper>
      <MyGridTitle><MyGridTitleSpan>Grid Title</MyGridTitleSpan>
       </MyGridTitle>
    <MyGridDefaultState>
     <MyGridBox>
     <table className="mygrid-htable" sellSpasing="0" sellPadding="0" border="0">
     <thead>
       <tr>
       <th style={{width: "54px"}}>InvNo</th>
       <th style={{width: "84px"}}>Date</th>
         <th style={{width: "84px"}}>Date</th>
       <th>Client</th>
       </tr>
     </thead>
     </table>
     </MyGridBox>
    </MyGridDefaultState>

    </MyGridWrapper>
    </IBoxContent>
    </IBox>
    </>
  )
}

export default  MyGrid
