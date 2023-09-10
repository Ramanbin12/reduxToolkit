import React from 'react';
import './App.css';
import Cake from './components/Cake';
import Button from './components/Button';
import UserView from './user/UserView';
import CakeView from './redux/slices/cake/CakeView';
import IcecreamView from './redux/slices/icecream/IcecreamView';
function App() {
  return (
    <div className="App">
  <Button/>
  <Cake/>
  <UserView/>
  <CakeView/>
  <IcecreamView/>
    </div>
  );
}

export default App;
