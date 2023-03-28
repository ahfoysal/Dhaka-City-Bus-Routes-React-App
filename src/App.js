

import Pages from "./pages/Navigation";
import {BrowserRouter} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';




// DisableDevtool();


 
function App() {
  
 







  return (
    <div className="App">
      
      <BrowserRouter>  
     <Pages  />
     </BrowserRouter>
 
    </div>
  );
}






export default App;
