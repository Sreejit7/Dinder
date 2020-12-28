export const initialState = {
  pets: [],
}
const reducer = (state,action) => {
    switch(action.type){
      case 'ADD_PET':
        let newPet = {
          name: action.name,
          img: action.img,
          date: action.date
        }
        return {...state, pets:[newPet, ...state.pets]};
      case 'REMOVE_PET':
        const index=state.pets.findIndex(
          (item)=> item.id===action.id
        );
        let newPets = [...state.pets];
        if(index>=0){
            newPets.splice(index,1);
        }
        return {...state, pets: newPets};
      default:
        return state;
    }
}
export default reducer;