

import React from 'react'
import{ Route, Routes, useLocation } from 'react-router-dom';
import Add from '../Admin/Main';
import Home from '../Home/Home';





function Pages({locations, buses, firestoreConncted}) {
  const location = useLocation();
  
  return (
    
        <Routes location={location} key={location.pathname}>
      
     
       <Route path="/" element={<Home   buses={buses} locations={locations} firestoreConncted={firestoreConncted} />} />
           
       <Route path="/add" element={<Add buses={buses} locations={locations}  firestoreConncted={firestoreConncted} />} />
       

       </Routes>  
    
  );
};

export default Pages