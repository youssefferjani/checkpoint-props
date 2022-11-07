
import './App.css'
import Card from './Components/Card'
import './Components/Card.css'


function App() {
  const name="Youssef Ferjani";
  const job="Front-end Developer";
  const about="As a React developer, i'll help to develop components of the user interface and implement them through React.js workflows like Redux or Flux. Additionally, i'll make sure that those user interface components are easy to maintain and robust. ";

  return (
    <div className="App">
      <Card name={name} job={job} about={about}/>
      
    
    </div>

  );
}

export default App;