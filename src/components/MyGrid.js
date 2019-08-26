import React, {useState, useRef, useEffect, useContext,useLayoutEffect,useCallback} from 'react';
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

let rowData = initData();


const MyGridWrapper = styled.div`

`;
const MyGriHeader = styled.div`

`;
const MyGridBody = styled.div`
    overflow-y: scroll;
    height:  400px;

`;
const MyEditTableDiv = styled.div`
    position: absolute;
    z-index: 1;
    top :  ${props=> {  return ( props.params.top  ) } };
    left :  ${props=> {  return ( props.params.left  ) } };
    overflow: hidden;
    display : ${props=> {  return ( props.params.state ? 'inline-block' :  'none' ) } };
    padding 10px 10px;
`;
const MyGridFooter = styled.span`

`
const SW = (s, f, c)=>{

  return ( s.map((u,i)=>{
      return  (c===i) ? {...u[i],width:f} : {...u} ;
   })
  )
}
const click_me2=function(){

   let index = 0;
   let z = [{ width: ""},{ width: ""}];

   let r = z.map((u,i)=>{
     return  (index===i) ? {...u[i],width:200} : {...u} ;
   })
    console.log(r);


};

const MyGrid = (s) => {


  const GridTable = ( { columnModel, rowData } )=>{

    let index = 0;


    const data = rowData.map((s)=> {
      return {...s, ...{clicked : false},...{mouseover : false}};
    });



    const THContext = React.createContext([ [{}], () => [{}]]);

    const THProvider = (props) => {
        const [state, setState] =  useState( columnModel.map((s,i)=>{
          return {width:""}
        }));

        return (
          <THContext.Provider value={[state, setState]}>
            {props.children}
          </THContext.Provider>
        );
    }
    const useWidth = ( column ) => {
        const[state, setState] = useContext( THContext );
        function setWidth(f){
          setState((s)=> {
            return s.map((u,i)=>{
              return  (column===i) ? {...u[i],width:f} : {...u} ;
            })

         })
       }
        return {
          state,
          setWidth,
        }
    }
    const [winstate , setWinState] = useState(window.innerWidth);
    window.addEventListener('resize',(s)=> setWinState(window.innerWidth));
    const TH = ({t,column})=>{
      const {state , setWidth} = useWidth(column);
        return (
          <th style = {{width: state[column].width }}>{t}</th>
        )
    }
    const TD1 = ({t,column})=>{
      const {state , setWidth} = useWidth( column );
      const tdElement = useRef( null );
      const click_td=(s)=>{
        var table = tdElement.current.parentElement.parentElement;
        for(var i=0; i < table.rows.length; i++){
            table.rows[i].classList.remove('bg-clicked');;
        }
        tdElement.current.parentElement.classList.add('bg-clicked');
      }
      useLayoutEffect(() => {
          let h = tdElement.current.offsetWidth;
          setWidth(h);
        },[  state[column].width, winstate ]);
      return (
        <td ref={tdElement} onClick={click_td}>{t}</td>
      )
    }

    const TD2 = ({t}) =>{
      const tdElement = useRef( null );
      const click_td=(s)=>{
        var table = tdElement.current.parentElement.parentElement;
        for(var i=0; i < table.rows.length; i++){
            table.rows[i].classList.remove('bg-clicked');;
        }
        tdElement.current.parentElement.classList.add('bg-clicked');
        index = parseInt(tdElement.current.parentElement.firstChild.innerText);

      //  console.log(table.parentElement.scrollHeight);
      //  console.log(table.parentElement.scrollTop);
      }

      return (
          <td ref={tdElement} onClick={click_td}>{t}</td>
      )
    }
    const clickRow = (i,s)=>{

    }

    const [params, setParams] = useState({"state" : false, top: 0, left: 0});

     const EditForm = () =>{

       return (<MyEditTableDiv params={params}><table className='editForm'>

       <tr><td>1111111111111</td></tr>
                                  <tr><td>22222222222222222</td></tr>
                                  <tr><td><button onClick={click_me4}>Close</button></td></tr>
         </table></MyEditTableDiv>)
     }
     const click_me2=()=>{

       var table = document.getElementById("table-1");
       var div = table.parentElement
       var box = div.getBoundingClientRect();

       setParams( ()=>{
         return {state : true, top:box.top, left: box.left};
       }) ;
     }
     const click_me4 =() =>{
       setParams( ()=>{
         return {state : false,  top:0, left: 0};
       }) ;
     }

     return(
      <>
       <MyGridWrapper>

         <THProvider>
         <MyGriHeader>
           <table border="1">
             <tr>
               {columnModel.map((s,i)=>{
                 return <TH t={s.caption} column={i}/>
               })}
             </tr>
           </table>
         </MyGriHeader>
         <MyGridBody>
            <EditForm />
           <table id="table-1" border="1" width="100%" className="hoverTable">
             <tr key={0} onClick={clickRow.bind(null,0)}>
               {columnModel.map((s,i)=>{
                 return (<TD1 t={data[0][s.name]} column={i}/>)
               })}
             </tr>

             { data.filter((e,k)=>(k>0)).map((d,i)=>{
               return(
                 <tr key={ d.id } onClick={clickRow.bind(null,d.id)}>

                     { columnModel.map((s,j)=>{
                      return (<TD2 t={ d[s.name]} /> )
                     })}
                 </tr>
               )
              })
             }
         </table>
         </MyGridBody>
         <MyGridFooter>
          <button onClick={click_me2}>TTT</button>
         </MyGridFooter>
         </THProvider>
       </MyGridWrapper>


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
        <GridTable {...{columnModel, rowData}}/>
     </IBoxContent>
    </IBox>
    </>
  )
}


export default  MyGrid
