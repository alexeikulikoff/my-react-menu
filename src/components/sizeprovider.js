import React, {useState, useContext} from 'react';


const SizeContext = React.createContext([{} , ()=>{}]);

const SizeProvider = (props) => {
    const [state, setState] =  useState( { st: true }  );
  
    return (
      <SizeContext.Provider value={[state, setState]}>
        {props.children}
      </SizeContext.Provider>
    );
}
const useStateContext = () =>{

  const [state, setState] = useContext( SizeContext );

  function toggleOpen(){
    let zz = { st : true };
    console.log( state );
    setState( (s)=> zz );
    console.log( state );
  };
  return {
    state,
    toggleOpen
  }

}
export {  SizeProvider , SizeContext, useStateContext} ;
