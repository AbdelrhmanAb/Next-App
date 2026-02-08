import axios from "axios";
// import { log } from "console";


export const fetchData =async () =>{
try {
     const res = await axios.get("/api/menu")

    return res.data
    
} catch (error) {
    console.log("fetch errors",error);
    throw error;
    
    
}
   
 }

 console.log(fetchData);
 