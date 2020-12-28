import './App.css';
import Cards from './Cards';
import PetList from './PetList';

function App() {
  return (
    <div className="app">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <div className="header">
       <div className="app__title">
          <i class="em em-dog" aria-role="presentation" aria-label="DOG FACE"></i>
          <h1>Dinder</h1>
        </div> 
        <h3>Virtual pet your favourite dogs!</h3>
      </div>
      <div className="app__body">
        <div className="app__left">
          <h1>Choose your next pet!</h1>
          <h3>Swipe left to reject, Swipe right to pet!</h3>
          <Cards/>
        </div>
        <div className="app__right">
          <h2>Your recent pets</h2>
          <PetList/>
        </div>
      </div>
    </div>
  );
}

export default App;
