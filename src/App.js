import React, {useState} from "react";
import Accordion from './Accordion.js';
import './style.css';

function App() {
  const [active, setActive] = useState("");
  const titles = [{
    name: 'title 1'
  }, 
  {
    name: 'title 2'
  },
  {
    name: 'title 3'
  },
  {
    name: 'title 4'
  }];

  return (<>
    
    <div className="app">
      {titles.map((el, i) => {
        return (<div key={i}>
          <Accordion title={el.name} active={active} setActive={setActive} />
        </div>)
      })}
    </div>
  </>);
}

export default App;
