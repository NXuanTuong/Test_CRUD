import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    fetch('http://localhost:3001/profile', {
      method: 'POST', 
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    }).then((res) => {
      alert('Thêm thành công!')
      navigate('/')
    }).catch((err) => {
      console.log(err.message);
    })
  } 
  
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
           <div className="card" style={{padding: 20, marginTop: 100}}>
           <div className="card-title">
              <h2>Employee Create</h2>
            </div>

            <div className="card-body">
              <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    className="form-control"
                    id="inputEmail4"
                  />
                  {errors?.name && <span>This field is required</span>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    {...register('age', { required: true })}
                    className="form-control"
                    id="inputPassword4"
                  />
                  {errors?.age && <span>This field is required</span>}

                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    School
                  </label>
                  <input
                    type="text"
                    name="school"
                    {...register('school', { required: true })}
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                    {errors?.school && <span>This field is required</span>}

                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Programming Language
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="programmingLanguage"
                    {...register('programmingLanguage', { required: true })}
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                   {errors?.programmingLanguage && <span>This field is required</span>}

                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
