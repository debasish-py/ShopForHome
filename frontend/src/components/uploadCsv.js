import { useState } from "react" 
import Papa from "papaparse"
import axios from  "axios"
function Upload() {
  const [udata,setData]=useState([])
   const submission=async(e)=>{
    e.preventDefault()
    let loginresponse
    try {  
      loginresponse = await axios.post("http://localhost:3001/upload",{ data:udata})     
      console.log(loginresponse)
  }
  catch (err) {
      console.log("err cant upload ")
  }
}
  function onFilechange(e){
    const files = e.target.files;
    console.log(files);
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        complete: function(results) {
          
          setData(results.data)
          console.log("Finished conv:", results.data)
        }}
      )
    } 
  }
  return (
<div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
         onFilechange(e)
        }}
      />
      <button onClick={submission} >submit</button>
    </div>    
  )
     }
export default Upload;