import React, { useEffect, useState } from 'react'
import db from '../Firebase'
import { collection, getDocs,addDoc,query, where, updateDoc } from 'firebase/firestore';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Update from './Update';
const Main = ({locations, buses}) => {
    const collectionRef = collection(db, 'buses ');
    const [busName, setBusName] = useState('')
    const [routesOf, setRoutesOf] = useState('')
useEffect(() => {
  
}, [])

    
const handleInputChange = async () => {
    
//   console.log(buseName, routesOf)
  const locations = routesOf.split(" ⇄ ");
      const data = createBusObject(locations, busName);
      const querySnapshot = await getDocs(query(collectionRef, where("BusNmae", "==", busName)));
console.log(data)
// Check if a matching document was found
if (querySnapshot.empty) {
  console.log("No document found with name", busName);
} else {
  // Get the first matching document
  const doc = querySnapshot.docs[0];
  const docRef = querySnapshot.docs[0].ref;
  console.log("Document found with ID:", doc.id, "and data:", doc.data());
  await updateDoc(docRef, data);

}
  }
  const handleInputChange2 = async () => {

  const locations = routesOf.split(" ⇄ ");
      const data = createBusObject(locations, busName);
      const querySnapshot = await getDocs(query(collectionRef, where("BusNmae", "==", busName)));
console.log(data)

if (querySnapshot.empty) {
  console.log("No document found with name", busName);
} else {
  // Get the first matching document
  const doc = querySnapshot.docs[0];
  const docRef = querySnapshot.docs[0].ref;
  console.log("Document found with ID:", doc.id, "and data:", doc.data());
//   await updateDoc(docRef, data);

}
  }


  return (
    <div   className='container' style={{ margin: '20px 0px' }}>
     <Tabs
      defaultActiveKey="Update"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Update" title="Update">
           <Update  buses={buses}/>
    {/* <input className='input' name="input1" value={busName} onChange={(e) => setBusName(e.target.value)}  placeholder='bus name' type="text" />
    <input className='input' name="input2" value={routesOf}  onChange={(e) => setRoutesOf(e.target.value)}placeholder='routes' type="text" />
    <button className='btn' onClick={handleInputChange}>add</button>
    <button className='btn' onClick={handleInputChange2}>Get Bus</button> */}
      
      </Tab>
      <Tab eventKey="Add" title="Add">
           
    <input className='input' name="input1" value={busName} onChange={(e) => setBusName(e.target.value)}  placeholder='bus name' type="text" />
    <input className='input' name="input2" value={routesOf}  onChange={(e) => setRoutesOf(e.target.value)}placeholder='routes' type="text" />
    <button className='btn' onClick={handleInputChange}>add</button>
    <button className='btn' onClick={handleInputChange2}>Get Bus</button>
      
      </Tab>
  

    </Tabs>

    </div>
  )
}

export default Main

function createBusObject(route, busName) {
  return {
    Routes: route,
    BusNmae: busName,
    StartingAndEndTime: null
  };
}
