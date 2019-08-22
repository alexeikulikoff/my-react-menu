import React, {useState, useRef, useEffect, useContext} from 'react';
import styled , { keyframes } from 'styled-components';
import {Icon, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink,TableWrapper} from './layouts';
import uuidv4 from 'uuid/v4';

import './MyGrid.css';

const MyGridWrapper = styled.div`

`;
const MyGriHeader = styled.div`

`;
const MyGridBody = styled.div`
    overflow-y: scroll;
    height:  100px;

`;
const MyGridFooter = styled.span`

`
const THContext = React.createContext([{}, () => {}]);

const THProvider = (props) => {
    const [state, setState] =  useState({ width: ""} )
    return (
      <THContext.Provider value={[state, setState]}>
        {props.children}
      </THContext.Provider>
    );
}
const useWidth = () => {
    const[state, setState] = useContext( THContext );
    function setWidth(f){
      setState((s)=> ({...state, width: f}));
    }

    return {
      state,
      setWidth,
    }

}
const TH = ({s})=>{

  const { state } = useWidth();

  return (
    <th style={{ width : state.width }}>{s}</th>
  )
}
const TD = ({t})=>{

  const { state, setWidth } = useWidth();

  const tdElement = useRef(0);

  useEffect(() => {
      //  console.log(tdElement.current.offsetWidth);
        setWidth(tdElement.current.offsetWidth);

   },[setWidth, state.width])

  return (
    <td ref={tdElement}>{t}</td>
  )
}
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
    <THProvider>
      <MyGriHeader>
        <table border="1">
        <theader>
        <tr>
              <TH s="Pizda"/><th>Date</th><th>Client</th><th>Notes</th>
        </tr>
        </theader>
        </table>
      </MyGriHeader>
      <MyGridBody>
      <table border="1" width="100%">
      <tbody>
      <tr><td ></td><td></td><td></td><td></td></tr>
      <tr><TD t="Inventary No"></TD><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      </tbody>
      </table> </MyGridBody>
      <MyGridFooter></MyGridFooter>
      </THProvider>
    </MyGridWrapper>

    </IBoxContent>
    </IBox>
    </>
  )
}

export default  MyGrid
