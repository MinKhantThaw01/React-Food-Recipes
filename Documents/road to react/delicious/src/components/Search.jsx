import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function Search() {

  const [input,setInput] = useState("")
  const navigate =useNavigate()
  const submittedHandler = (e) =>{
     e.preventDefault();
     navigate("/searched/"+input);
    
  }

  return (
    <FormStyle onSubmit={submittedHandler}>
        <div>
            <FaSearch/>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0 2rem;
  div {
    position: relative;
    width: min(550px, 100%);
    margin: 0 auto;
  }
  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 4rem;
    border: none;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fff;
  }
;`

export default Search