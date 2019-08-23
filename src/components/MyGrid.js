import React, {useState, useRef, useEffect, useContext} from 'react';
import styled , { keyframes } from 'styled-components';
import {Icon, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink,TableWrapper} from './layouts';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import './MyGrid.css';

const columnModel = [
  {name : "id",   className: "col-sm-1", caption : "id"},
  {name : "col1", className: "col-sm-3", caption : "First Name"},
  {name : "col2", className: "col-sm-3", caption : "Second Name"},
  {name : "col3", className: "col-sm-3", caption : "Last Name"}

];
const initData = ()=>{
  var data=[];
  for(var i=0; i < 100; i++){
    data.push({id: i, col1: "Piter " + i, col2: "Jhon " + i, col3: "Cooper" + i});
  }
  return data;
}

let columnState =  columnModel.map((s,i)=>{
   return { col : i, width : "" };
});

let data = initData();


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
const THContext = React.createContext([  [{}], () => [{}] ]);

const THProvider = (props) => {

    const [state, setState] =  useState( columnState )

    return (
      <THContext.Provider value={[state, setState]}>
        {props.children}
      </THContext.Provider>
    );
}
const useWidth = () => {

    const[state, setState] = useContext( THContext );

    function setWidth(f,column){
      console.log(state);
      let newObj = {col : column, width: f};
      const updatedState = [...state.slice(0, column),newObj,...state.slice(column+1)  ];
      console.log(updatedState);
      setState( (s)=> { return updatedState } );
    }

    return {
      state,
      setWidth,
    }

}
const TH = ({t,column})=>{

  const { state } = useWidth(  );

  return (
    <th style={{ width : state[ column ].width }}>{t}</th>
  )
}
const TD = ({t,column})=>{

  const { state, setWidth } = useWidth(  );

  const tdElement = useRef( null );

  useEffect(() => {
      //  console.log(tdElement.current.offsetWidth);
        setWidth(tdElement.current.offsetWidth, column);

   },[]);

  return (
    <td ref={tdElement}>{t}</td>
  )
}

const click_me2=()=>{

let com = 0;
let zz = [{col:0, width: 60},{col:1, width: 620}];

let aa = zz.map((s,i)=>{
  return s.col===com ? {...s,width:"1000px"} : {...s};
})
console.log(aa);


};
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

        <tr>
            <TH t="Pizda" column={0}/><TH t="Suka" column={1}/><th>Client</th><th>Notes</th>
        </tr>

        </table>
      </MyGriHeader>
      <MyGridBody>
      <table border="1" width="100%">

      <tr>
      <TD t="hello" column={0} /><TD t="hello 11111" column={1} /><td>www22</td> <td>www</td>


{/*        {columnModel.map((s,i)=>{

          return (
            <TD t={data[0][s.name]} column={i} />
          )
        })}

    */}
      </tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>
      <tr><td>No</td><td>Date</td><td>Client</td><td>Notes</td></tr>

      </table> </MyGridBody>
      <MyGridFooter></MyGridFooter>
      </THProvider>
    </MyGridWrapper>
    <button onClick={click_me2}>TTT</button>
    </IBoxContent>
    </IBox>
    </>
  )
}


export default  MyGrid
