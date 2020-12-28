import React,{useState} from 'react'
import './PetList.css';
import { useStateValue } from './StateProvider';
const PetList = () => {
  const [{pets}, dispatch] = useStateValue();

  return (
    <div className = "petlist">
    {
      pets.map((pet) => (
        <tr>
          <td>
            <div className="pet__item">
              <img
                src = {pet.img}
                alt = ""
              />
              <div className="pet__desc">
                <h3>{pet.name}</h3>
                <p>Petted on: {pet.date}</p>
              </div>              
            </div>
          </td>
        </tr>
      ))
    }  
    </div>
  )
}

export default PetList
