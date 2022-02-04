import './App.css';
import React, { useEffect, useState } from 'react'


function App() {
  const data = [
    {
      "name": "Homer Simpson",
      "location": "Springfield",
      "date_of_birth": "1956-05-12"
    },
    {
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    },
    {
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    },
    {
      "name": "Krusty the Clown",
      "location": "SpringField",
      "date_of_birth": "1957-10-29"
    }
  ]

  const [location, setLocation] = useState([])
  const [display, setDisplay] = useState([])
  const allLocations = []



  useEffect(() => {
    for (let i=0; i < data.length; i++) {
      if (!allLocations.includes(data[i].location.toLocaleLowerCase())) {
        allLocations.push(data[i].location.toLocaleLowerCase())
      }
    }
    // data.forEach(content => {
    //   console.log(allLocations.includes(content.location))
    //   console.log(allLocations)
    //   if (!allLocations.includes(content.location)) {
    //     allLocations.push(content.location)
    //   }
    // })
    setLocation(allLocations)
  }, [])


  const handleClick = (event) => {
    const thisLocation = event.target.value
    const results = []
    data.forEach(content => {
      if (content.location.toLocaleLowerCase() === thisLocation) {
        results.push(content.name)
      }
    })
    setDisplay(results)
  }

  return (
    <section>          
      <div style={{ display: 'flex' , justifyContent: 'space-evenly', marginTop: '50px', marginBottom: '100px' }}>
        {location.map(place =>{
          return (
              <button key={place} value={place} onClick={handleClick} style={{ padding: '10px', textTransform: 'capitalize'}}>{place}</button>
          )
        })}
      </div>
      {display &&
      display.map(result => {
        return (
          <>
          <h3 key={result} style={{ textAlign: 'center' }}>{result}</h3>
          </>
        )
      })
        }
    </section>
  )
}

export default App;
