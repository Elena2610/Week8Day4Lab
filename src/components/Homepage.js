import '../App.css';
import Header from "./Header";
import SearchBar from "./Search Bar";
import EmployeeList from "./EmployeeList";
import EmployeePage from "./Employee Page";

function Homepage() {
  return (
    <div className="Homepage">
        <Header/>
        <SearchBar/>
        <EmployeeList/>
        <EmployeePage/>
    </div>
  );
}

export default Homepage;