import React, {useState, useRef, useEffect} from 'react';
import {Icon, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink,TableWrapper} from './layouts';
import uuidv4 from 'uuid/v4';

import './table.css';

const genData = ()=>{
  var data=[];
  for(var i=1; i < 100; i++){
    data.push({id: i, col1: "Name" + i, col2: "SerName" + i, col3: "Name" + i});
  }
  return data;
}
const click_row = (s) =>{
  console.log(s)
}

const data = genData().map((s)=> {
  return {...s, ...{clicked : false},...{mouseover : false}};
});

const columnModel = [
  {name : "id",   className: "col-sm-1", caption : "id"},
  {name : "id",   className: "col-sm-2", caption : "Action", render : function(data,row){

    return  <button className="btn btn-primary btn-xs" onClick={click_row}> Action</button>;
  }},
  {name : "col2", className: "col-sm-3", caption : "Second Name"},
  {name : "col3", className: "col-sm-3", caption : "Sername"}

]

const DataTableHook = (d) => {

  const [data, setData] = useState( d );

 const toggleClick = (s) => {
    const newObj = { ...data[s], clicked : !data[s].clicked }

    const clearData = data.map((s)=>{
      return {...s, clicked: false};
    })

    const updatedData = [...clearData.slice(0, s),newObj,...clearData.slice(s+1)  ];
    return updatedData;

 }
 const toggleMouse = (s) => {
    const newObj = { ...data[s], mouseover : !data[s].mouseover }
    const clearData = data.map((s)=>{
      return {...s, mouseover: false};
    })
    const updatedData = [...clearData.slice(0, s),newObj,...clearData.slice(s+1)  ];
    return updatedData;

 }
 return {
    data,
    setClicked : (s)=> setData( toggleClick(s) ),
    setMouseOver : (s) => setData( toggleMouse(s))
  }
}

const MyTable = (s)=>{

  const trRef =useRef(null);

  const TableHook  = DataTableHook( data );

  const [params, setParams] = useState({"state" : false, "height": "auto", "id" :  uuidv4()});

   const click_me = (s)=>{
     setParams( ()=>{
         let h = document.getElementById( params.id ).offsetHeight + 'px' ;
         return {"state": !params.state, "height": params.state ? h:  params.height , "id" : params.id }
     });
   }



  const clickRow = (i,s)=>{

    TableHook.setClicked(i);
    //console.log(i);
  }
 const rowMouseOver=(i,e)=>{
    // console.log(i);
     TableHook.setMouseOver(i);
 }
 const rowMouseOut=(i,e)=>{
   TableHook.setMouseOver(i);
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
<TableWrapper>
    <table className="table">
    <thead>
    <tr className="theader">
    {columnModel.map((f)=> {
      return (f.className.length > 0) ?  <td className={f.className}>{f.caption}</td> :  <td >{f.caption}</td>;
    })}
  </tr>
  </thead>
  <tbody>

    {TableHook.data.map((s,i)=> {
      return (
        <tr key={i}  className={ s.clicked ? 'bg-clicked' : (s.mouseover ? 'bg-mouseover' : 'bg-unclicked bg-mouseout')}   onClick={clickRow.bind(null,i)} onMouseOver={rowMouseOver.bind(null,i)} onMouseOut={rowMouseOut.bind(null,i)}>
          {columnModel.map((f)=> {
             return f.render == null ? <td className={f.className}>{s[f.name]}</td> : <td className={f.className}>{f.render( s[f.name], trRef.current ) }</td>;
          })}
        </tr>
      )
    })}
    </tbody>
  </table>
  </TableWrapper>
    </IBoxContent>
    </IBox>
    </>
  )
}

export default MyTable
