import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleStudent, selectSingleStudent } from '../../Features/Students/SingleStudentSlice';
import EditStudentForm from './EditSingleStudentForm';


const SingleStudent = () => {
  const student = useSelector(selectSingleStudent);
  const { firstName, lastName, email, imageUrl, gpa, campus } = student;
  const dispatch = useDispatch();

  const { studentId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <>
    <div class='container'>
      <div id='single-student' className='student-detail' key={studentId}>
        <img src={imageUrl}/>
        <h3>Student Name:</h3>
        <p>{firstName} {lastName}</p>
        <h3>Email:</h3>
        <p>{email}</p>
        <h3>GPA</h3>
        <p>{gpa}</p>
      <h3>Enrolled at:</h3>
      <ul>
        {campus ?
        <li>
        <Link to={`/campuses/${campus.id}`} style={{textDecoration: 'none'}} class='linkName'>{campus.name}</Link>
        </li> : 'No campus assigned'}
      </ul>
    </div>
    </div>
        <div>
        <EditStudentForm />
      </div>
      </>
  )
};

export default SingleStudent;
