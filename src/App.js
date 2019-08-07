import React from 'react';
import './App.css';
import Green from './Components/Green/green';
import Brown from './Components/Brown/Brown';
import Blue from './Components/Blue/blue';
import Pink from './Components/Pink/pink';
import DeepPink from './Components/DeepPink/deeppink';




class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Green />
      <Brown />
      <Blue />
      <Pink />
      <DeepPink />
      </div>
  );
}
}
export default App;
