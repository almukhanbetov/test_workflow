import React, {useEffect, useState} from "react"




function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    async function fetchData() {
        const res = await fetch("http://localhost:8080/hello")
        const data = await res.json()
        console.log(data.message)
        setMessage(data.message)
    }
    fetchData()
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  )
}

export default App
