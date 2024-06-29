const subject=["Java","Python","Oracle","PHP"];


    const mysub=subject.map((key)=>{
        return(
            <>
            <li>{key}</li>
            </>
        )
  }
     )

const App=()=>{
    return(
        <>
        <ul>
            {mysub}
        </ul>
        </>
    )
}
export default App;