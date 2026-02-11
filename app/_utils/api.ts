import axios from "axios";
// import { log } from "console";


 const fetchData =async () =>{
try {
     const res = await axios.get("/api/menu")

    return res.data
    
} catch (error) {
    console.log("fetch errors",error);
    throw error;
    
    
}
   

}


 const getProductByCategory =async (category :string) =>{
try {
     const res = await axios.get("/api/menu?category="+category)

    return res.data
    
} catch (error) {
    console.log("fetch errors",error);
    throw error;
    
    
}
   

}



 export {
    fetchData,
    getProductByCategory

 }

//  console.log(fetchData);
 