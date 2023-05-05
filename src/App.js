import Pages from "./pages/Navigation";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import data from './Home/BusRout.json'
import { collection, getDocs } from 'firebase/firestore';
import db from './Firebase'
function App() {
  const [buses, setBuses] = useState(data)
  const uniqueRoutes = [...new Set(data.flatMap(bus => bus.Routes))];
  const [locations, setLocations] = useState(uniqueRoutes);
  const [firestoreConncted, setFirestoreConncted] = useState(false);
  
  const fetchData = async () => {
      
      try {
        const querySnapshot = await getDocs(collection(db, 'buses '));
        const dataArray = querySnapshot.docs.map(doc => doc.data());
        const uniqueRoutes = [...new Set(dataArray.flatMap(bus => bus.Routes))];
        setFirestoreConncted(true)
        setLocations(uniqueRoutes)
        setBuses(dataArray)

      } catch (error) {
        setFirestoreConncted(false)
        console.log(error);
         setLocations(uniqueRoutes)
      }
    };
  useEffect(() => {
    fetchData()
   
  }, [])
  return (
      <BrowserRouter>  
     <Pages  buses={buses} locations={locations}  firestoreConncted={firestoreConncted}/>
     </BrowserRouter>

  );
}






export default App;
