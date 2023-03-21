import logo from './logo.svg';
import './App.css';

const number = 555;
const singers =[{name: 'Dr Mahfuz', job: 'singer'},
                {name: 'Eva Rahman', job: 'singer2'},
                {name: 'Agun', job: 'singer2'},

]


function App() {
  const nayoks =['Rubel', 'BappaRaaz', 'Taklu', 'Jasim', 'Salma Shah', 'Sakib Khan', 'Arfan Niso', 'Riyaz', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


    {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>
    <Person name={nayoks[1]} nayika="Cheka"></Person>
    <Person name={nayoks[2]}></Person> */}
    <h5>New Comment. YAY</h5>
    <p>Rock Mama Rock Mama</p>
    <Friend phone="01777668766"></Friend>
    <Friend movie="singam"></Friend>
    <Friend></Friend>
    <Friend></Friend>
    </div>
  );
}
function Person(props){
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p> {props.nayika}</p>
    </div>
  );
}
function Friend(props){
  console.log(props)
  return(
    <div className="container">
      <h1>Name: {props.movie}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
