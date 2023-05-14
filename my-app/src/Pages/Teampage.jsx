
import React from 'react'
import { useSelector } from 'react-redux'

  
 

function Teampage() {
    const Team= useSelector((store)=>store.data);
    const {team}=Team

   
    const filteredData = team.filter((item, index) => {
        return index === team.findIndex(obj => obj.id === item.id);
      });
      
    console.log(filteredData)
  return (
    <div>
        {filteredData.map((el)=>(
            <div key={el.id}>
             <img src={el.avatar} alt='img'/>
             <h3>{el.first_name}{el.last_name}</h3>
            </div>
        ))}

    </div>
  )
}

export default Teampage