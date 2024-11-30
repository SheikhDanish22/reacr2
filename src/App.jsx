import student from "./StuData";
const ans=student.map((key)=>{

return(
    <>
     <tr>
        <td>{key.RollNo}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
     </tr>
    
    
    </>
)



})


const App=()=>{
    return(
        <>
        
        <h1>Hello</h1>
        <table border="1">
            <tr>
                <th>Rollno</th>
                <th>name</th>
                <th>city</th>
                <th>fess</th>
            </tr>
            {ans}
        </table>
        
        </>
    )
}
export default App;