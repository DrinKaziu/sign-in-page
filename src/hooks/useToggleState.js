import { useState } from 'react';

export default (initailVal = false) => {
  const [state, setState] = useState(initailVal);
  const toggle = () => {
    setState(!state)
  }

  return [state, toggle];
}