import Employee from "./Emp";
import EmpDesign from "./EmpDesign";
const ans = Employee.map((key) => <EmpDesign empno={key.empno} name={key.name} city={key.city} salary={key.salary} />);
const App = () => {
    return (
        <>
            <h1>Welcome</h1>
            <div id="empno">
                {ans}
            </div>

        </>
    )
}
export default App;