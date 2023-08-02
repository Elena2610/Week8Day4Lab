import '../App.css';

function EmployeeListItem(name) {
  return (
    <div className="EmployeeListItem"> 
      <h2>{name.empl[0]}</h2>
      <h3>{name.empl[1]}</h3>
    </div>
  );
}

export default EmployeeListItem;