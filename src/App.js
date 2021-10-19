import './App.css';

function App() {
  return (
    <div>
      <Hello name="Chelsey" age='33'/>
      <Hello name="Jimmy" age='31'/>
    </div>
  );
}

function Hello(props) {

  return (<div className="App">
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>)
}

export default App;
