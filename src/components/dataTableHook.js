import React, {useState} from 'react';

const DataTableHook = (d) => {

  const [state, setState] = useState( 0 );

  return {
    state,
    setState
  }
}
export default DataTableHook;
