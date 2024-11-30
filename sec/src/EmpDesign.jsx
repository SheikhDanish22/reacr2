const EmpDesign=(props)=>{
    return(
        <>
        <div className="data">
            <h1>Employee id: {props.empno}</h1>
            <h1>Name:{props.name}</h1>
            <h1>City:{props.city}</h1>
            <h1>Salary:{props.salary}</h1>
        </div>
        </>
    )
}
export default EmpDesign;