import Agevalidation from './Agevalidation';
import './App.css';
import Name from './Name';

function App() {
  //Destructuring
  // const arr=[1,2,3,4];
  // const [one,two,four]=arr;
  // console.log(one,"One");
  // console.log(two,"two");
  // console.log(four,"Four");



  return (
    <div className="App">
  {/*<Name fname="Safi" lname="ullah"/>*/}
  <Agevalidation/>
    </div>
  );
}

export default App;
