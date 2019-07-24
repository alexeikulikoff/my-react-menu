import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css';

import { MyDiv1, MyDiv2,Footer,  MenuWrapper} from './components/layouts';
import { MenuItem } from './components/mymenu';

const content= [
    {
        id : 1,
        icon:  'fa fa-bell fa-xs',
        label: 'Dashboard',
        to: '#a-link1',
        active : false,
    },
    {
        id : 2,
        icon:  'fab fa-adn fa-xs',
        label: 'Layouts',
        to: '#a-link2',
        active : false,
    },
    {
        id : 3,
        icon:  'fab fa-airbnb fa-xs',
        label: 'Graphs',
        to: '#a-link3',
        active : false,
        content: [
            {
                id : 4,
                icon: 'anchor',
                label: 'Float Chart',
                to: '#another-link',
            },
            {
                id : 5,
                icon: 'fas fa-allergies fa-xs',
                label: 'Pie Chart',
                to: '#another-link',
            }
        ]
    },
    {
        id : 6,
        icon: 'fab fa-angellist fa-xs',
        label: 'Mailbox',
        active : false,
        content: [
            {
                id : 7,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 11',
                to: '#another-link',
            },
        ],
    },
    {
        id : 7,
        icon: 'fab fa-angellist fa-xs',
        label: 'Toolbox',
        active : false,
        content: [
            {
                id : 11,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 11',
                to: '#another-link',
            },
        ],
    },
    {
        id : 8,
        icon: 'fab fa-angellist fa-xs',
        label: 'CheckBox',
        active : false,
        content: [
            {
                id : 9,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 13',
                to: '#another-link',
            },
            {
                id : 10,
                icon: 'fab fa-airbnb  fa-xs',
                label: 'Label 14',
                to: '#another-link',
            },
        ],
    },
];



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
    <button onClick={(s)=>  setState(!state)} >|||</button>


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
