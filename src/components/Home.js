import React from 'react'
import './css/Home.css'
import { BuildCard } from './BuildCard'

const Home = () => {

  const builds = [
    {name: "ACEtoberfest", image: "./assets/ace.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "Phi Delt Las Vegas", image: "./assets/phi.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "The Masters", image: "./assets/masters.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "Sigma Chi Yacht Club", image: "./assets/sigchi.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "PIKE: The Saloon", image: "./assets/pike.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "Delts Angels", image: "./assets/delt.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "Kappa Sigma Margaritaville", image: "./assets/kappa.png", link: "https://fb.me/e/blSXy29Xp"},
    {name: "Beta Born in the USA", image: "./assets/beta.png", link: "https://fb.me/e/blSXy29Xp"}
  ];


  return (
    <div className='home-container'>
      <h1>Builds</h1>
      <div className='builds-container'>
        {builds.map((item, index) => (
          <BuildCard key={index} name={item.name} image={item.image} link={item.link}/>
          ))}
      </div>
    </div>
  )
}

export default Home