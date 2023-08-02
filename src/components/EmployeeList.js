import '../App.css';
import EmployeeListItem from "./Employee List Item";

function EmployeeList() {
  return (
    <div className="EmployeeList"> 
        <EmployeeListItem empl={['James King','President and CEO']}/>
        <EmployeeListItem empl={['Julie Taylor','VP of Marketing']}/> 
        <EmployeeListItem empl={['Eugene Lee',"CEO"]}/>
        <EmployeeListItem empl={['John Williams','VP of Engeneering']}/> 
        <EmployeeListItem empl={['Ray Moore','VP of sales']}/>
        <EmployeeListItem empl={['Paul Jones','QA Manager']}/> 
    </div>
  );
}

export default EmployeeList;