
import {uniqueNamesGenerator, names} from 'unique-names-generator';
import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './Cards.css';
import { useStateValue } from './StateProvider';
const Cards = () => {

  const [petsList, setPetsList] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [{pets}, dispatch] = useStateValue();

  useEffect (() => {
    const fetchData = async() => {
      await fetch('https://dog.ceo/api/breeds/list/all')
            .then((res) => res.json())
            .then((data) => {
              setBreeds(data.message);
            })
            .catch((err) => console.log(err));
    }
    fetchData();
  },[]);
  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/image/random/50';
    const fetchPets = async() => {
      await fetch(url)
            .then((res) => res.json())
            .then((data) => setPetsList(data.message))
            .catch((err) => console.log(err));
    }
    fetchPets();
  },[]);

  
   
  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  }
 
  console.log(breeds);
  console.log(pets);

  const onSwipe = (direction, img) => {
    const petName = uniqueNamesGenerator({
      dictionaries: [names],
    });
    if(direction === "right"){
      dispatch({
        type: "ADD_PET",
        name: petName,
        img: img,
        date: new Date().toISOString().slice(0, 10)
      });
    }
    console.log('You swiped: ' + direction);
  }
  return (
    <div className = "cards">
      <div className="cards__container">
        {petsList.map((pet) => (
            <TinderCard
              className = "swipe"
              preventSwipe = {["up", "down"]}
              onSwipe = {(direction) => onSwipe(direction, pet)}
              onCardLeftScreen = {() => outOfFrame(pet)}
            >
              <div  style = {{ backgroundImage: `url(${pet})`}}
                    className = "card"
              >
              </div>
              <div className="icons">
                <IconButton onClick = {() => onSwipe("left", pet)}>
                  <CloseIcon fontSize = "large" className = "close-icon"/>
                </IconButton> 
                <IconButton onClick = {() => onSwipe("right", pet)}>
                  <FavoriteIcon fontSize = "large" className = "fav-icon"/>
                </IconButton>
              </div>           
            </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Cards
