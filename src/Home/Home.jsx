import React, { useEffect, useRef, useState } from 'react'

import Accordion from 'react-bootstrap/Accordion';

import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import Suggetion from './Suggetion';
import styled from 'styled-components';



const Home = ({locations, buses}) => {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [items, setItems] = useState([])
    
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
    <div className='container' >

<div className='mt-100'>
<Form onSubmit={handleSubmit} >
<div style={{ display: "flex" }} >
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
      <ButtonDiv  style={{ marginTop: "30px" }} className='btn' onSubmit={handleSubmit} type="submit">Search Bus</ButtonDiv>

</Form>

      <Accordion  style={{ marginTop: "80px" }}>
      { buses.length < 1 && <p>No Buses Found</p> }
      {!from && !to  ? buses?.map((bus,index)=> {
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
const ButtonDiv = styled.button`
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
