 import React from 'react';
 import {Route , Switch} from 'react-router-dom';
 import Navbarmenu from './Navbarmenu';
import Piechart from './Piechart';
import Tablechart from './Tablechart';

const Error =()=>{
  return <h1>OOps!! page not found!</h1>
}
 
 const App = () => {
   return (
     <>
     <Navbarmenu/>
     <Switch>
       <Route exact path='/' component={Tablechart} />
       <Route exact path='/Piechart' component={Piechart} />
       <Route component={Error}/>
     </Switch>
       
     </>
   )
 }
 
 export default App
 