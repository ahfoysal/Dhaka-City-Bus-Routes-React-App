

import React from 'react'
import{ Route, Routes, useLocation } from 'react-router-dom';
import Add from '../Admin/Add';
import Home from '../Home/Home';





function Pages() {
  const location = useLocation();
  
  return (
    
        <Routes location={location} key={location.pathname}>
      
     
       <Route path="/" element={<Home />} />
           
       <Route path="/add" element={<Add />} />
       

       </Routes>  
    
  );
};

export default Pages