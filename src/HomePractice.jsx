const city=["Mumbai","Pune","Bhopal","Banglore","Delhi"]
const mycity=city.map((key)=>{
    return(
        <option value="">{key}</option>
    )
})


const App=()=>{
    return(
        <>
                
           
       

        <h1>Today's task</h1>

         <div style={{backgroundColor:"yellow",margin:"auto",padding:"50px",width:300}}>
            <div style={{backgroundColor:"lightpink",margin:"auto",padding:"40px"}}>
                <div style={{backgroundColor:"orange",margin:"auto",padding:"25px"}}>
                    <div style={{backgroundColor:"violet",padding:"4px"}}><h1 style={{textAlign:"center",color:"grey"}}>Rohan</h1></div>
                </div>
            </div>
         </div>
         <div><select>
               {mycity}
           </select>
           </div>

           
            <ul style={{justifyContent:"space-evenly",listStyle:"none",alignItems:"center",textAlign:"center",display:"flex"}}>
             <li> <div style={{backgroundColor:"orange",color:"white",padding:"50px"}}>Mobile</div></li>
              <li><div style={{backgroundColor:"pink",color:"white",padding:"50px"}}>Laptop</div></li>
              <li><div style={{backgroundColor:"yellow",color:"white",padding:"50px"}}>Television</div></li>
            </ul>
           
        
        
         
        </>
        
    )
}
export default App;

