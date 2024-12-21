import { useState, useEffect } from 'react';
import './App.css';
import Box from './box';

function App() {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
      let array = await response.json(); 
      setdata(array);
    };
    fetchData();
  }, []);
  
  return (
    <div className="card flex flex-wrap justify-center">
      {datas.map((item) => (
        <Box key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
