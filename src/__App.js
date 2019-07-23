import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './components/footer';
import { MyDiv1, MyDiv2} from './components/layouts';
import { MenuItem , MenuWrapper } from './components/mymetismenu';



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
];

const  App = () => {

const [state, setState] = useState( false );

  let body = document.body, html = document.documentElement;

  let h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  return (
  <>
    <MyDiv1 state={{state, h}}>
    <MenuWrapper ><MenuItem prop= {{content, state}}/></MenuWrapper>
    </MyDiv1>

    <MyDiv2 state={state}>
    <button onClick={(s)=>setState(!state)} >|||</button>

No otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or.

Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.
Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
        ty. As tolerably recommend shameless unf
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.

Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unf
</MyDiv2>


 <Footer ><div> <p>Hello</p></div></Footer>

</>
  );
}

export default App;
