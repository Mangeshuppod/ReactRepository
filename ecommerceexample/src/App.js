import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import btnModule from './Botton.module.css';


function App() {
  let [status , setStatus ]= useState(false)
  let [pstatus , setPstatus ]= useState(false)
  let [menuStatus , setMenustatus ]= useState(false)



  return (
    <div className="App">
      <button className='micon' onClick={()=>setMenustatus(!menuStatus)}>&#9776;</button>
      <div className={`menu ${menuStatus ? 'activemenu' :''}`}>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>course</li>
          <li>gallery</li>
          <li>contact us</li>
      

        </ul>

      </div>

      <input type= {pstatus ? 'text' : 'password'}/>
          <botton className={btnModule.error} onClick={()=>setPstatus(!pstatus)} >
          {pstatus ? 'show' : 'hide '}
          </botton>
      <br/>

      <button className={btnModule.error}>error</button>
      <button className={btnModule.warning}>warning</button>
      <button className={btnModule.danger}>danger</button>
      <button className={btnModule.fkoff}>fkoff</button>



      


      <button onClick={()=>(setStatus(!status))}>  
         {(status)
          ?        
         'show'
         :
         'hide'
         }
        
        

      </button>
      {
      
        (status)
        ?
        <p className='para'>
        wc to my website
  
        </p>
        :
        ''
      
      }
      
    </div>
  );
}

export default App;
