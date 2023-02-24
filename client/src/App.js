import { useState } from "react";
import Form from "./components/Form";
import './App.css'


function App() {
  const [responses, setResponses] = useState([])
  const [loading, setLoading] = useState(false)

const submitQuery = async (prompt) => {
  setLoading(true)
  let json;
  try {
    const body = {
      prompt: prompt
    }
    const response = await fetch('http://localhost:5000/getImage/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    json = await response.json();
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error(error.message);
  }
  setResponses(prev => ([...prev, json]))
}
  return (
    <div className="App">
      <div className="container">
        {responses?.map(res => (
        <img src={res.response} key={res.response} alt={res}/> 
        ))}
        {loading ? <div className="loading"><h1>Loading Image...</h1></div> : ''}
    </div>
     
       <Form 
         submit={submitQuery}
       />
    </div>
  )
}

export default App
