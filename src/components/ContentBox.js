import React, {useState, useRef} from 'react';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {Icon, MyDiv1, MyDiv2,Footer,  MenuWrapper, PageHeader,LinkBtn, WrapperContent, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink} from './layouts';

const id = uuidv4();

const ContentBox = (s)=>{

  const [state, setState] = useState(true);
  const rf = useRef();
  const click_me = (s)=>{
    setState(!state)

  }

  return(
    <>
    <IBox>
    <IBoxTitle><IBoxTools><H5>{s.title}</H5><IBoxToolLink onClick={click_me}><Icon icon={state ? 'fa fa-chevron-up' :'fa fa-chevron-down'}/> </IBoxToolLink></IBoxTools>
    </IBoxTitle>
    <IBoxContent state={state} id={id} ref={rf}>
    {s.content}
    </IBoxContent>
    </IBox>
    </>

  )
}

export default ContentBox;
