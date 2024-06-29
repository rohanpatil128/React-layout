const student=[
    {
        "rollno":1228,
        "name":"Rohan",
        "city":"Bhopal"

    },
    {
        "rollno":18,
        "name":"Mohan",
        "city":"Pune"

    },
    {
        "rollno":8,
        "name":"Shriya",
        "city":"Bhopal"

    },
    {
        "rollno":12,
        "name":"Sunny",
        "city":"Mumbai"

    }
    

    
]

const ans=student.map((key)=>{
    return (
        <>
          <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
          </tr>
        </>
    )
})

const App=()=>{
    return(
        <>
          <h1>Welcome to cybrom bhopal</h1>
          <table border="1" widhth="500px" bgcolor="pink">
            <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>City</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default App;
