import React, { useEffect, useState } from 'react';
import axios from 'axios';

// this component will take in two props
// 1. name
// 2. intensity
const Card = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '2rem', margin: '1rem', }}>
      <h1>{props.name}</h1>
      <p>This is the intensity: {props.intensity}</p>
    </div>
  );
};

// we are passing 1 prop right now
// the prop is "name" and the value is "kendal"
const App = () => {
  // whatever goes into useState(........) is the default value
  // `num` is the `getter`. that's how you get the value
  // `setNum` is the `setter`. that's how you set the value
  // const [num, setNum] = useState(12); 

  const [hotsauces, setHotsauces] = useState([]);

  // we have to use lifecycle in order to obtain data
  // what is react lifecycle?
  // something that happens in each "stage" of the component's life
  // what are the stages of the component's life?
  // 1. when the component first gets onto the screen
  // a. this triggers useEffect
  // b. componentDidMount

  // 2. when the component gets updated
  // a. this also triggers useEffect
  // b. componentDidUpdate

  // 3. when the component gets off of the screen
  // a. this also triggers useEffect
  // b. componentDidUnmount

  // just a regular old function
  // takes in 2 arguments
  // 1. a callback function
  // a. this callback function gets executed when your component mounts

  // dont worry about this one yet
  // 2. an array
  // a. this is an array of dependencies. whenever a variable in this array gets updated, the callback will be executed again
  useEffect(() => {
    // what is a state?
    // a state is some sort of data
    // the cool thing about state is...
    // whenever the data changes, it automatically re-renders the screen

    const getData = async () => {
      // this is a very very good place to get data from your backend
      // PEMDAS

      // if you await a promise, you get the value
      const {data} = await axios.get('/hotsauces');
      setHotsauces(data);
    };

    getData();
  }, []);

  // this gets executed twice
  // 1. before the component gets mounted. the useEffect did not get called yet
  // 2. after the component got mounted. the useEffect did get called
  console.log(hotsauces);

  return (
    <>
      {
        // the key has to be 
        // 1. fully unique
        // 2. uniquely identifies that one item
        hotsauces.map(hotsauce => <Card key={hotsauce.id} name={hotsauce.name} intensity={hotsauce.intensity} />)
      }
    </>
  );
};

export default App;

/*
1. how to make a component
2. passing props
3. lifecycle (useEffect)
4. state (useState)
*/

/*
jsx
2 modes- when i say "mode" i mean "jsx interprets your code in html / javascript"

1. html mode: you get into html mode by doing <
2. javascript mode: you get into js mode by doing {
*/

/*
there are like 3 ways to write these 2 lines'
1.
const response = await axios.get('/hotsauces');
const data = response.data;

2.
const data = (await axios.get('/hotsauces')).data;

3. destructuring
const {data: hotsauces} = await axios.get('/hotsauces');
const {data: user} = await axios.get('/user');
*/