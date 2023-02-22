import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
    // if(event.detail === 1){
    //   console.log("I was not double clicked");
    // }else if(event.detail ===2){
      console.log("I was double clicked");
    // }
  }
  const handleSingleClick = (event)=>{
      console.log("I was not double clicked");
  }
  
  return (
    <div id="main">
      <button onClick={handleSingleClick} onDoubleClick={handleDoubleClick} id="dblclick-btn">Double click me</button>
    </div>
  )
}


export default App;
