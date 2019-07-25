import React, {useState, useEffect,useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css';

import {Icon, MyDiv1, MyDiv2,Footer,  MenuWrapper, PageHeader,LinkBtn, WrapperContent, Div, IBox, IBoxTitle, IBoxContent, Label,
   H5,IBoxTools, IBoxToolLink} from './components/layouts';
import { MenuItem } from './components/mymenu';
import content from './data/content';
import ContentBox from './components/ContentBox';


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

const click_me = ()=>{
  console.log('click-me');
}
let cnt="Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf Perhaps far exposed age effects. Now distrusts you her delivered applauded ";
let title = "Headings";
  return (
  <>
    <MyDiv1 id="d1" state={{state, height}} style={{width : "220px"}}>
    <MenuWrapper ><MenuItem prop= {{content, state}}/></MenuWrapper>
    </MyDiv1>
    <MyDiv2 id="d2" state={state}  style={{marginLeft : "220px"}}>
    <PageHeader className="row"> <LinkBtn onClick={(s)=>  setState(!state)} state={state}/></PageHeader>

  <WrapperContent>
  <Div className="row">
     <Div className="col-lg-4">
      <ContentBox  title={title} content={cnt} />
    </Div>
    <Div className="col-lg-4">


  </Div>
</Div>
</WrapperContent>

</MyDiv2>

<button onClick={toggleMenu} > Toggle Menu</button>
 <Footer  state={state} id="footer" style={{left : "220px"}}><div> <p>Footer  {height}</p></div></Footer>

</>
  );
}

export default App;
