import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Availity Registration Form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='first'
            placeholder='Enter your first name'
            value={values.first}
            onChange={handleChange}
          />
          {errors.first && <p>{errors.first}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='last'
            placeholder='Enter your last name'
            value={values.last}
            onChange={handleChange}
          />
          {errors.last && <p>{errors.last}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>NPI Number</label>
          <input
            className='form-input'
            type='text'
            name='npi'
            placeholder='Enter your NPI Number'
            value={values.npi}
            onChange={handleChange}
          />
          {errors.npi && <p>{errors.npi}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Business Address</label>
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your business address'
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Telephone Number</label>
          <input
            className='form-input'
            type='text'
            name='phone'
            placeholder='Enter your telephone number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>


        <button className='form-input-btn' type='submit'>
          Register
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
