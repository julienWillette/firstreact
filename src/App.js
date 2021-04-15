import './App.css';
import Wilder from './Wilder.js'
import AddWilder from './AddWilder.js'
import axios from 'axios'
import { useEffect, useState } from 'react';

const App =() =>  {
  const [wilders, setWilders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "http://localhost:3000/api/wilder/read"
        );
        console.log(result.data.result);
        setWilders(result.data.result);
      }catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddWilder />
        <h2>Wilders</h2>
        <section className="card-row">
            {wilders.map((el)=> <Wilder key={el._id} {...el}/>)}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
