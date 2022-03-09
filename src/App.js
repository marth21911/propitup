import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="Wayne" lastName="Brady" age="45" hairColor= "black"/>
        <PersonCard firstName="Bruce" lastName="Wayne" age="73" hairColor= "brown"/>
        <PersonCard firstName="Waynes" lastName="World" age="35" hairColor= "garthblonde"/>
        <PersonCard firstName="Wayne" lastName="Szalinski" age="55" hairColor= "yes"/>
      </header>
    </div>
  );
}

export default App;
