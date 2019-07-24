import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css';

import {Icon, MyDiv1, MyDiv2,Footer,  MenuWrapper, PageHeader,LinkBtn} from './components/layouts';
import { MenuItem } from './components/mymenu';
import content from './data/content';


const toggleMenu = () => {
  console.log('toggle');
  console.log(window.innerHeight);
}
const h = () => {
  let body = document.body,
      html = document.documentElement;

  return  Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
}
const  App = () => {

const [state, setState] = useState( false );

const [ height, setHeight] = useState(h());

useEffect(() => {
  const updateHeight = (s)=>{
    setHeight( window.innerHeight );
  }
  window.addEventListener('resize', updateHeight);
  return () => {
      window.removeEventListener('resize', updateHeight);
    }
}, [height]);



  return (
  <>
    <MyDiv1 id="d1" state={{state, height}} style={{width : "220px"}}>
    <MenuWrapper ><MenuItem prop= {{content, state}}/></MenuWrapper>
    </MyDiv1>
    <MyDiv2 id="d2" state={state}  style={{marginLeft : "220px"}}>

    <PageHeader> <LinkBtn onClick={(s)=>  setState(!state)} /></PageHeader>




No otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or.

Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.
Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        ty. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
</MyDiv2>

<button onClick={toggleMenu} > Toggle Menu</button>
 <Footer  state={state} id="footer" style={{left : "220px"}}><div> <p>Footer  {height}</p></div></Footer>

</>
  );
}

export default App;
