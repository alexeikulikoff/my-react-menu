import React, {useState, useRef, useEffect, useContext,useLayoutEffect,useCallback} from 'react';
import styled , { keyframes } from 'styled-components';
import ContentBox from './ContentBox';
import {Icon, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink,TableWrapper} from './layouts';
import uuidv4 from 'uuid/v4';
import { UIWidgetOverlay,MyGridFooter,MyEditFormDiv, MyGridBody, MyGriHeader,MyGridWrapper,MyEditFormTitle, MyEditFormContent, MyEditFormTitleText } from './mygridlayouts';

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



const MyGrid = (s) => {

  const GridTable = ( { columnModel, rowData } )=>{

    let tmp = rowData.map((s)=> {
      return {...s, ...{clicked : false},...{mouseover : false}};
    });

   const data = { values : tmp, currentRef: 0, currentPos : 0 };

    const DataTableHook = (d) => {

     const [data, setData] = useState( d );

     const toggleClick = (s,p) => {
       let tmp = data.values.map((v,i)=>{
         return {...v,clicked:false}
       })
       let tmp2 = tmp.map((u,i)=>{
         return  (u.id===s) ? {...u, clicked :!u.clicked} : {...u} ;
       })
       return { values : tmp2, currentRef : s, currentPos : p}
     }
     return {
        data,
        setClicked : (s,p)=> setData( toggleClick(s,p) )
      }
    }

    const TableHook  = DataTableHook( data );

    const [params, setParams] = useState({state : false, top: 0, left: 0, index: 0, draggable: false });

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
      return (
          <td ref={tdElement} >{t}</td>
      )
    }

     const EditForm = () =>{
       const [formData, setFormData] = useState( data.values[ params.index ] );
       const [curName, setCurName] = useState("");
       const INPUT = ({name,value}) =>{
         const inpRef = useRef(null);
         const [inputValue, setInputValue] = useState( value );
         const on_change = (s)=>{
           setCurName( name );
           let nv = inpRef.current.value;
           let prop = inpRef.current.name;
           setInputValue(nv);
           setFormData((v)=> ({...v,   [prop] : nv }));

         }
         useEffect(()=>{
            if (inpRef.current.name===curName) {
              inpRef.current.focus();
             }
         },[]);

         return(
             <input type="text" name={name} ref={ inpRef } className="formInput" value={inputValue} onChange={(s)=> {on_change(s)}}/>
         )
       }

      const updateData = ()=>{
           console.log( formData );
      }

      const onMouseDown = (e)=>{
        setParams( (s)=>({...s, draggable: true }) ) ;

      }
      const onMouseUp = (e)=>{
         setParams( (s)=>({...s, draggable: false }) ) ;
      }
      const onMouseMove = (e)=>{
        e.stopPropagation()
        e.preventDefault()
        if (params.draggable){

        //  setParams((s)=>({...s,top: e.pageX, left: e.pageY}));
          console.log(e.pageX);
        }
      }
      return (
      <MyEditFormDiv  params={params} style={{top: params.top, left: params.left}}>
      <MyEditFormTitle onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}><MyEditFormTitleText>Edit record</MyEditFormTitleText></MyEditFormTitle>
      <MyEditFormContent>
          <table className='editForm'>
              {columnModel.map((s,i)=>{
                return (
                  <tr><td>{s.caption + ':'}</td><td><INPUT  key={i} name={s.name} value={formData[s.name]}/></td>
                  </tr>
                )
              })}
              <tr><td colspan="2"><button onClick={updateData}>Save</button><button  onClick={closeEditForm}>Close</button></td></tr>
          </table>
       </MyEditFormContent>
       </MyEditFormDiv>
       )
     }

     const openEditForm=()=>{
       var table = document.getElementById("table-1");
       var div = table.parentElement
       var box = div.getBoundingClientRect();

       setParams( ()=>{
         return {state : true, top:'20%', left:'20%',index: params.index , draggable: false };
       }) ;
     }

     const closeEditForm =() =>{
       setParams( ()=>{
         return {state : false,  top:0, left: 0, index: params.index, draggable: false };
       }) ;
     }

     const click_me6 = ()=>{

       let div = document.getElementById("gbody-1");
       console.log(div.scrollTop);
       console.log(div.scrollHeight);
       //div.scrollTo(0,300);
     }
     const TR = ( { i , p })=>{

       const trElement = useRef( null );

       const click_tr=(i,e)=>{
         var div = trElement.current.parentElement.parentElement;
         TableHook.setClicked(i,  div.scrollTop  );
         setParams((s)=>{
           return {...s, index: i}
         })

       }
       useEffect(() => {
            let pos = TableHook.data.currentPos;
            var div = trElement.current.parentElement.parentElement;
            div.scrollTo(0,pos);
         });
       return (
         <tr className={TableHook.data.values[i].clicked ? 'bg-clicked' : 'bg-unclicked'} ref={trElement} onClick={click_tr.bind(null,i)}>{p}</tr>
       )
     }
     return(
      <>
      <EditForm />
      <UIWidgetOverlay  params={params}/>
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
         <MyGridBody id="gbody-1">

           <table id="table-1" border="1" width="100%" className="hoverTable">
             <tr key={0}  className={ TableHook.data.values[0].clicked ? 'bg-clicked' : 'bg-unclicked'} >
               {columnModel.map((s,i)=>{
                 return (<TD1 t={data.values[0][s.name]} column={i}/>)
               })}
             </tr>

             { TableHook.data.values.filter((e,k)=>(k>0)).map((d,i)=>{
               return(
                  <TR i={d.id} p = { columnModel.map((s,j)=>{
                      return (<TD2 t={ d[s.name]} /> )
                    })} />
                )
              })
             }
         </table>
         </MyGridBody>
         <MyGridFooter>
          <button onClick={openEditForm}>Open Edit</button>
          <button onClick={click_me6}>TestObjChange</button>
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
