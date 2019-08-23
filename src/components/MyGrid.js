import React, {useState, useRef, useEffect, useContext,useLayoutEffect} from 'react';
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
   return { width : "" };
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
const SW = (s, f, c)=>{

  let aa = s.map((u,i)=>{
    return  (c===i) ? {...u[i],width:f} : {...u} ;
  });

  return aa;
}
const click_me2=()=>{

let index = 0;
let zz = [{width: ""},{ width: ""}];

zz = SW(zz,100,0);

console.log( zz );

zz = SW(zz,300,1)
console.log( zz );


};

const THContext = React.createContext([  [{}], () => [{}] ]);

const THProvider = (props) => {

    const [state, setState] =  useContext( THContext  )

    return (
      <THContext.Provider value={[state, setState]}>
        {props.children}
      </THContext.Provider>
    );
}
const Hook = () => {

    const[state, setState] = useState( columnState );

    function setWidth(f,column){
        setState( (s)=>SW(s,f,column) ) ;
    }

    return {
      state,
      setWidth,
    }

}
const MyGrid = (s) => {

  const GridTable = ( { columnModel, data } )=>{

    const {state , setWidth} = Hook();

    const TH = ({t,column})=>{
     return (
        <th style={{ width : state[ column ].width }}>{t}</th>
      )
    }
    const TD = ({t,column})=>{

      const tdElement = useRef( null );

      useEffect(() => {

          //  console.log(tdElement.current.offsetWidth);
          setWidth(tdElement.current.offsetWidth, column);

        });

      return (
        <td ref={tdElement}>{t}</td>
      )
    }

     return(
      <>
       <MyGridWrapper>

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
             </tr>
           </table>
         </MyGridBody>
         <MyGridFooter></MyGridFooter>
      
       </MyGridWrapper>

       <button onClick={click_me2}>TTT</button>
       </>
     )
  }

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
      <IBoxTitle><IBoxTools><H5>{s.title}</H5>
        <IBoxToolLink onClick={click_me}>
          <Icon icon={params.state ? 'fa fa-chevron-up' :'fa fa-chevron-down'}/>
        </IBoxToolLink>
       </IBoxTools>
      </IBoxTitle>
      <IBoxContent params={params} id={params.id}>
        <GridTable {...{columnModel, data}}/>
     </IBoxContent>
    </IBox>
    </>
  )
}


export default  MyGrid



{/*        {columnModel.map((s,i)=>{

        return (
          <TD t={data[0][s.name]} column={i} />
        )
      })}

  */}
