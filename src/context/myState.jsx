import { useState } from 'react';
import MyContext from './myContext';

function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);


  const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';

      }
  }
  

  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState