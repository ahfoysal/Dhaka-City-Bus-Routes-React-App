import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Suggetion from '../Home/Suggetion';

const Update = ({buses}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [busName, setBusName] = useState([]);
    const [item, setItem] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const divRef = useRef(null);
    const names = Object.keys(buses).map(key => buses[key].BusNmae);
    const handleSubmit = (e) => {

        e.preventDefault(); 
        setIsVisible(true);
        setBusName(e.target.value)
        const name =   buses.find(item => item.BusNmae === e.target.value);
        console.log(name)
        console.log(e.target.value)
        function findMatches(inputText) {
            // Filter the array based on input text
            const matches = names.filter(item => item.toLowerCase().includes(inputText.toLowerCase()));
          
            return matches;
          }
  
  
    setSuggestions(findMatches(e.target.value))
    if (e.target.value === '')(setSuggestions([]))

      };
      const handleSelectSuggestion = (suggestion) => {
        setBusName(suggestion);
        const name =   buses.find(item => item.BusNmae === suggestion);
        console.log(name)
        setItem(name)
        setSuggestions([]);
      };
      useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
              setIsVisible(false);
              
            }
           
          }
        
      
          // Bind the event listener
          document.addEventListener('mousedown', handleClickOutside);
      
          // Unbind the event listener on cleanup
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
      }, [divRef])
  return (
    <div className='container'>
  <Form onSubmit={handleSubmit} >
<div style={{ display: "flex" }} >
    <div style={{ position: 'relative' }}>
    <input    value={busName} onChange={handleSubmit} type="text" style={{ marginRight: "10px" }} placeholder='Bus Name' />
    {isVisible && (
     <Suggetion handleSelectSuggestion={handleSelectSuggestion} suggestions={suggestions} divRef={divRef} />
      )}
    </div>
   </div>
      <ButtonDiv  style={{ marginTop: "30px" }} className='btn' onSubmit={handleSubmit} type="submit">Find Bus</ButtonDiv>

</Form>
    </div>
  )
}

export default Update
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
const Form = styled.form`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;