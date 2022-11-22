import React from 'react'
import { useState } from "react";
import axios from "axios";

export default function Discussion({disc}) {

    const [del, setDel] = useState(disc._id);


    console.log(del);

    const deldisc = () => {

        const delData = async () => {
            const result = await axios.delete(
              `http://localhost:3001/posts/${del}`,

            );
           
          };
      
          delData();
    }
  return (
    <div>
        <h1>{disc.name}</h1>
        <div >{disc.contenu}</div>
        <div className='btn' onClick={() => deldisc()}>❌</div>
    </div>
  )
}
