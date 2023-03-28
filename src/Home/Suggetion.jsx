import React from 'react'

const Suggetion = ({divRef, suggestions, handleSelectSuggestion}) => {
  return (
    <div ref={divRef}>
       
       {suggestions.length > 0 && (
 
 <div  id="search_fromautocomplete-list" className="autocomplete-items">
   {suggestions.map((suggestion, index) => (
     
   <div onClick={() => handleSelectSuggestion(suggestion)} key={index}>{suggestion}</div>
   ))}
   </div>

)}
       </div>
  )
}

export default Suggetion
