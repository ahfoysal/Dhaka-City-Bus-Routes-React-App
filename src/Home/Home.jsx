import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import Accordion from 'react-bootstrap/Accordion';
import db from '../Firebase'
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import Suggetion from './Suggetion';
import styled from 'styled-components';
import data from './BusRout.json'

const Home = () => {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
    const [buses, setBuses] = useState(data)
    const [items, setItems] = useState([])
 
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);
    
    const uniqueRoutes = [...new Set(data.flatMap(bus => bus.Routes))];
    const [locations, setLocations] = useState(uniqueRoutes);

   

    const fetchData = async () => {
      
      try {
        const querySnapshot = await getDocs(collection(db, 'buses '));
        const dataArray = querySnapshot.docs.map(doc => doc.data());
        const uniqueRoutes = [...new Set(dataArray.flatMap(bus => bus.Routes))];
     
        setLocations(uniqueRoutes)
        setBuses(dataArray)
      } catch (error) {
        console.log(error);
         setLocations(uniqueRoutes)
      }
    };
    const handleSubmit = (e) => {
    
      e.preventDefault(); 
      if(!from)return
      if(!to)return
      const stopsToFind = [from, to];
 
      const filteredRoutes = buses.filter((route) => {
        return stopsToFind.every(stop => {
          return route.Routes.some(routeStop => {
          
         
           
             return routeStop.toLowerCase().includes(stop.toLowerCase());
          });
        });
      });
      setItems(filteredRoutes)
      console.log(filteredRoutes)
    };
    useEffect(() => {
      
      fetchData()
      function handleClickOutside(event) {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setIsVisible(false);
          
        }
        if (divRef2.current && !divRef2.current.contains(event.target)) {
          setIsVisible2(false);
          
        }
      }
    
  
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
  
      // Unbind the event listener on cleanup
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [divRef])
    const handleSelectSuggestion = (suggestion) => {
      setFrom(suggestion);
      console.log(suggestion)
      setSuggestions([]);
    };
    const handleInputChange = (event) => {
      setIsVisible(true);
      const value = event.target.value;
    
      // console.log(value)
      setFrom(value);
  
      // Filter options based on the input value
      const filteredOptions = locations?.filter((option) =>
        option.toLowerCase().startsWith(value.toLowerCase())
      );
  
      setSuggestions(filteredOptions);
      if (value === '')(setSuggestions([]))
    };
    const handleSelectSuggestion2 = (suggestion) => {
      setTo(suggestion);
      console.log(suggestion)
      setSuggestions2([]);
    };
    const handleInputChange2 = (event) => {
      setIsVisible2(true);
      const value = event.target.value;
    
      // console.log(value)
      setTo(value);
  
      // Filter options based on the input value
      const filteredOptions = locations.filter((option) =>
        option.toLowerCase().startsWith(value.toLowerCase())
      );
  
      setSuggestions2(filteredOptions);
      if (value === '')(setSuggestions2([]))
    };


  return (
    <div className='container' style={{ marginTop: "80px" }}>


<Form onSubmit={handleSubmit} style={{  }}>
<div style={{ display: "flex" }}>
    <div style={{ position: 'relative' }}>
    <input   value={from} onChange={handleInputChange} type="text" style={{ marginRight: "10px" }} placeholder='from' />
    {isVisible && (
     <Suggetion handleSelectSuggestion={handleSelectSuggestion} suggestions={suggestions} divRef={divRef} />
      )}
    </div>
    <div style={{ position: 'relative' }}>
      <input value={to} onChange={handleInputChange2} type="text" style={{ marginLeft: "20px" }} placeholder='to'/>
      {isVisible2 && (
     <Suggetion handleSelectSuggestion={handleSelectSuggestion2} suggestions={suggestions2}  divRef={divRef2} />
      )}
      </div></div>
      <Button  style={{ marginTop: "30px" }} className='btn' onSubmit={handleSubmit} type="submit">Search Bus</Button>

</Form>

      <Accordion  style={{ marginTop: "80px" }}>
      { buses.length < 1 && <p>No Buses Found</p> }
      {items.length === 0 ? buses?.map((bus,index)=> {
            return  <Accordion.Item key={index} eventKey={`${index}`}>
        <Accordion.Header>{bus.BusNmae}</Accordion.Header>
        <Accordion.Body>
      <b>Route: </b> {bus.Routes?.map((route,index) => ` ${route},`)}
      
        </Accordion.Body>
      </Accordion.Item>
          }) : 
          items?.map((bus,index)=> {
            return  <Accordion.Item key={index} eventKey={`${index}`}>
        <Accordion.Header>{bus.BusNmae}</Accordion.Header>
        <Accordion.Body>
      <b>Route: </b> {bus.Routes?.map((route,index) => ` ${route},`)}
      
        </Accordion.Body>
      </Accordion.Item>
          })
          }
    </Accordion>

           
      
    </div>
  )
}

export default Home
const Form = styled.form`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;
const Button = styled.button`
    border: 0;
    background-color: #fccd03;
    color: #1c3c6b;
    border-radius: 10px;
    padding: 10px 40px;
    font-size: 16px;
    font-size: 18px;
    font-weight: 700;
    outline: none;
    &:hover {
    background-color: #1c3c6b;
    color: #fccd03;
  }
`;
