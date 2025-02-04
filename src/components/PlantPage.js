import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [allPlants, setAllPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => {
      setAllPlants(data)
      
    })
  }, [])

  function onNewPlantSubmit(newPlant){
    

      fetch("http://localhost:6001/plants",{
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(newPlant)
      })
      .then(response => response.json())
      .then(data => {
        setAllPlants([...allPlants, data])
      })
      
  }

  const filteredPlants = allPlants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function onSearchChange(event){
    setSearch(event.target.value)
  }
  

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search search={search} onSearchChange={onSearchChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
