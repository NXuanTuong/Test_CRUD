import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployee, removeEmployee } from "../app/userSlice";

export const EmpListing = () => {
    const users = useSelector(store => store.users.users)
    const dispatch = useDispatch()
        
    useEffect(() => {
      dispatch(getEmployee())
    }, [])

    const handleDelete = (id) => {
        if(window.confirm('Do yo want to remove?')) {
          dispatch(removeEmployee(id))
            alert('Xóa thành công!')
            window.location.reload()
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
              users && users.length > 0 &&
              users?.map((item, index) => (
                <tr key={index}>
                    <td>{index++}</td>
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
