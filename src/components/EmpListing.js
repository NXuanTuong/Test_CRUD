import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmpListing = () => {
    const [ListData, setListData] = useState(null)
    
    useEffect(() => {
      fetch('http://localhost:3001/profile').then((res) => {
          return res.json()
      }).then((data) => {
          setListData(data)
      }).catch((err) => {
         console.log(err);
      }) 
    }, [])

    const handleDelete = (id) => {
        if(window.confirm('Do yo want to remove?')) {
            fetch('http://localhost:3001/profile/'+id, {
            method: 'DELETE', 
            }).then((res) => {
                alert('Xóa thành công!')
                window.location.reload()
            }).catch((err) => {
            console.log(err.message);
            })
        }
    }
    
  return (
    <div style={{padding: '150px'}}>
        <h1>Data List</h1>
        
        <div className="card-body">
            <Link to='employee/create' className="btn btn-primary">Add Item (+)</Link>
        </div>
      <table  class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">School</th>
            <th scope="col">Programming Language</th>
          </tr>
        </thead>
        <tbody>
          {
              ListData && 
              ListData.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.school}</td>
                    <td>{item.programmingLanguage}</td>
                    <button type="button" className="btn btn-success" style={{backgroundColor: 'green'}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={`employee/edit/${item.id}`}>Edit</Link>
                        </button>
                    <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-danger" style={{backgroundColor: 'red', color: 'white'}}>Remove</button>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};
