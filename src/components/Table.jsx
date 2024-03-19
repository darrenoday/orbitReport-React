import styles from "./styling.css"

const Table = ({ sat }) => {

  const renderTableData=()=>{
    
    return sat.map((data) => (
      <tr key={data.id}> 
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational ? 'active' : 'inactive'}
      </td>
      </tr>
      
    ));
  };
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {renderTableData()}
     <tr>
    </tr>
     </tbody>
   </table>
  );
}

export default Table;