import React from 'react';
import './App.css';
//Components
import ThemeSwitcher from './Components/ThemeSwitcher';
import DarkThemeTodoItems from "./Components/DarkThemeTodoItems";
import LightThemeTodoItems from "./Components/LightThemeTodoItems";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeSwitcher themePaths={["light", ""]}/>
        <Switch>
          <Route path="/" component={DarkThemeTodoItems} exact/>
          <Route path="/light" component={LightThemeTodoItems}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
