import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const App = ()=> {
  const [numbers, setNumbers] = React.useState([]);
  React.useEffect(()=> {
    const load = async()=> {
      const response = await axios.get('/api/numbers');
      setNumbers(response.data);
    };
    load();
  }, []);
  return (
    <div>
      <h1>The Numbers App ({ numbers.length })</h1>
      <ul>
        {
          numbers.map( number => {
            return (
              <li key={ number }>
                { number }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
/*
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numbers: []
    };
  }
  async componentDidMount(){
    try {
      const response = await axios.get('/api/numbers');
      this.setState({ numbers: response.data });
    }
    catch(ex){
      console.log(ex);
    }
  }
  render(){
    const { numbers } = this.state;
    return (
      <div>
        <h1>The Numbers App ({ numbers.length })</h1>
        <ul>
          {
            numbers.map( number => {
              return (
                <li key={ number }>{ number }</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
*/

const root = createRoot(document.querySelector('#root'));
//root.render(React.createElement('hr'));
root.render(<App />);
