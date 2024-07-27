import Header from '../componnts/header';
import Main from '../componnts/main';
import Fotter from '../componnts/footer';
import { useEffect } from 'react';

const Home = () => {
  useEffect(()=> {
    document.title = 'Web Game';
  },[])
  return (
    <div>
      <Header/>
      <Main/>
      <Fotter/>
    </div>
  );
}

export default Home;
