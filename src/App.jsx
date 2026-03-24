import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/homepage/navbar/Navbar'
import Players from '../Players'
import { Suspense } from 'react';

// const fetchPlayers=async ()=>{
//   const res = await fetch('/playerData.json')
//   return res.json();
// }

function App() {
  // const playersPromise = fetchPlayers();
  const playersPromise = fetch('/playerData.json').then(res=> res.json());

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
