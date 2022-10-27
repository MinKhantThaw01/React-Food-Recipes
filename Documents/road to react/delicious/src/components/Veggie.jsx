import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom"
function Veggie() {

  const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();
    },[])
    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch (
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=pasta`
            );
            const data = await api.json();

            localStorage.setItem('veggie',JSON.stringify(data.recipes));
              setVeggie(data.recipes)
        }

        
    }
  return (
    <div>
        <Wrapper>
        <h3>Our Pasta Picks</h3>
        <Splide 
        options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "4rem", 
        }}
        >
        {veggie.map((recipe) => {
            return (
                <SplideSlide  key={recipe.id}>
                <Card>
                    <Link to={"/recipe/" +recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient/>
                    </Link>
                </Card>
                </SplideSlide>
            )
        })}
        </Splide>
    </Wrapper>
    </div>

  )
}

const Wrapper = styled.div `
  margin: 4rem 0rem;
   ;`

const Card = styled.div `
     min-height: 15rem;
     overflow: hidden;
     position: relative;

     img {
        position:absolute;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
      }
      p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 10%);
        color: #fff;
        width: 100%;
        height: 40%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        // text-shadow:3px 5px 5px #000;
      }  
;`
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
;`


export default Veggie