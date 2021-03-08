import axios from 'axios';
import { useEffect, useState } from 'react';
import Artwork from './ArtWork.js';
import Spinner from './Spinner.js';
import './App.css';

function App() {

  const [art, setArt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      dataResponse: 'JSON',
      params: {
        key: 'Mizwo0wK',
        format: 'JSON',
        hasImage: true
      }
    }).then(response => {
      response = response.data.artObjects;
      
      setArt(response);
      setIsLoading(false);
    });
  }, []);


  return (
    <div className="App">
      <h1>Art!</h1>
      {
        isLoading?<Spinner />
        :art.map((item)=>{
          return (
            <Artwork 
              key={item.id}
              imgSrc={item.webImage.url} 
              altText={item.longTitle} 
              title={item.title} 
              artist={item.principalOrFirstMaker}/>
          )
        })
      }
    </div>
  );
}

export default App;
