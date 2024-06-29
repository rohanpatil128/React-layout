const city=["Bhopal","Indore","Mumbai","Pune"];
const mycity=city.map((key)=>{
    return(
        <>
         <option>{key}</option>
        </>
    )
})
const App=()=>{
    return(
        <>
          <h1>Welcome to cybrom</h1>
          <select>
            {mycity}
          </select>
        </>
    )
}
export default App;