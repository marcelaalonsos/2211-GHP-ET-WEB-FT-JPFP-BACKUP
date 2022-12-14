import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editSingleCampus } from '../../Features/Campuses/SingleCampusSlice';

const EditCampusForm = () => {
  const dispatch = useDispatch();
  const {campusId} = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(editSingleCampus({campusId, name, address}));
    setName('');
    setAddress('');
    navigate(`/campuses/${campusId}`);
  }



  return (
    <form id='edit-form' onSubmit={handleSubmit}>
      <h3>Edit Campus Info Here:</h3>
      <label htmlFor='name'>New Campus Name</label>
      <input
      name = 'name'
      value = {name}
      onChange = {(e) => setName(e.target.value)}
      />
      <span></span>
      <label htmlFor='address'>New Campus Address</label>
      <input
      name = 'address'
      value = {address}
      onChange = {(e) => setAddress(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default EditCampusForm;
