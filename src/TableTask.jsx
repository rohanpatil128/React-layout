const Employee=[
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    },
    {
        "empno":528,
        "name":"Rohan",
        "salary":150000,
        "city":"Pune"
    }
    
]

const ans=Employee.map((key)=>{
    return(
       
        <tr>
            <th>{key.empno}</th>
            <th>{key.name}</th>
            <th>{key.salary}</th>
            <th>{key.city}</th>
        </tr>
    )
})

const App=()=>{
    return(
        <>
        <table bgcolor="yellow" width="500px"align="center" >
            <tr>
                <th>Employee no.</th>
                <th>Name</th>
                <th>Salary</th>
                <th>City</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;
