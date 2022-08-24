import { useState } from "react" 
import Papa from "papaparse"
import axios from  "axios"
import { Link} from "react-router-dom"


function Upload() {
  const [udata,setData]=useState([])
   const submission=async(e)=>{
    e.preventDefault()
    let loginresponse
    try {  
      loginresponse = await axios.post("http://localhost:8000/main/upload",{ data:udata})     
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
    <div className='container'>
<div className="container py-4">
  <Link className="btn btn-primary" to="/admin">
        back to Dashboard
      </Link>
      <h1 className="display-4">Add Products In Bulk</h1>
      <hr />
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
         onFilechange(e)
        }}
      />
      <button onClick={submission} >submit</button>
    </div> 
    </div>   
  )
     }
export default Upload;