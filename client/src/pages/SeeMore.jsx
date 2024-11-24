import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
function SeeMore() {
    const {id} = useParams()
    async function getvalue(){
        axios.put(`http://localhost:5000/main/${id}`)
    }
  return (
    <div>
      <h1>this is the see more page</h1>
    </div>
  )
}

export default SeeMore
