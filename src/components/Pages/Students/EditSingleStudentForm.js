import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editSingleStudent } from '../../Features/Students/SingleStudentSlice';

const EditStudentForm = () => {
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(editSingleStudent({studentId, firstName, lastName}));
    setFirstName('');
    setLastName('');
    navigate(`/students/${studentId}`);
  }

  return (
    <form id='edit-student-form' onSubmit={handleSubmit}>
      <h3>Edit Student Info Here:</h3>
      <label htmlFor='firstName'>New Student First Name</label>
      <input
      name = 'firstName'
      value = {firstName}
      onChange = {(e) => setFirstName(e.target.value)}
      />
      <span></span>
      <label htmlFor='lastName'>New Student Last Name</label>
      <input
      name = 'lastName'
      value = {lastName}
      onChange = {(e) => setLastName(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default EditStudentForm;
