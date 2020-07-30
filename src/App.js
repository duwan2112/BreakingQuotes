import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ContainerFrase from './components/ContainerFrase'


const AppStyled = styled.div`
  text-align: center;
  color: #fff;
 
 .send{
    background: linear-gradient(90deg ,#007d35 0%,#007d35 40%,#0f574e  100%);
    background-size: 300px;
    color: #fff;
    padding: 1rem 3rem;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 2rem;
    margin-top: 3rem;
 }
`;


function App() {
  const  [quotes,setQuotes] = useState({}) 
  const [quote,setQuote] = useState({})
  const random = () => {
    return Math.floor(Math.random() * (70 - 0)) + 0;
  }
  useEffect(()=> { 
 
 fetch('https://www.breakingbadapi.com/api/quotes')
   .then(result => result.json())
   .then(response  => {
   setQuotes(response)
   setQuote(response[random()])
   }  ) 


     
  },[]) 
  
  const handleButton = e => {
   e.preventDefault()
   setQuote(quotes[random()])

   }
   
  

  return (
    <AppStyled >
     
       <h1>Breaking bad </h1>
       <ContainerFrase quote={quote}  ></ContainerFrase> 
       <button onClick={handleButton} className="send">Get Frase </button>
    </AppStyled>
  );
}

export default App;
