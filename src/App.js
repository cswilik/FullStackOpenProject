import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  let course = 'Half Stack Application Development'
  let part1 = "Fundamentals of React"
  let exercises1 = 10
  let part2 = "Using Props"
  let exercises2 = 7
  let part3= 'State of Component'
  let exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1} part2={part2} part3={part3} 
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
    </div>
  );
}


export default App;
