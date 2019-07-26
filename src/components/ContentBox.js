import React, {useState, useRef, useEffect} from 'react';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {Icon, MyDiv1, MyDiv2,Footer,  MenuWrapper, PageHeader,LinkBtn, WrapperContent, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink} from './layouts';



const ContentBox = (s)=>{

 const [params, setParams] = useState({"state" : true, "height": "auto", "id" :  uuidv4()});


  const click_me = (s)=>{
    setParams( ()=>{
        console.log(params.id);
        let h = document.getElementById( params.id ).offsetHeight + 'px' ;
        return {"state": !params.state, "height": params.state ? h:  params.height , "id" : params.id }
    });
  }
  const click_me2 = (s)=>{
    console.log('click_me2');
  }
  return(
    <>
    <IBox>
    <IBoxTitle><IBoxTools><H5>{s.title}</H5><IBoxToolLink onClick={click_me}>
          <Icon icon={params.state ? 'fa fa-chevron-up' :'fa fa-chevron-down'}/>

           </IBoxToolLink>
          <IBoxToolLink onClick={click_me2}>
              <Icon icon="fas fa-cog"/>
          </IBoxToolLink>
           </IBoxTools>
    </IBoxTitle>
    <IBoxContent params={params} id={params.id}>
    <p>{s.content}</p>
    </IBoxContent>
    </IBox>
    </>

  )
}

export default ContentBox;
