import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchAllStudents, selectStudents } from '../../Features/Students/AllStudentsSlice';
import AddStudentForm from './AddStudentForm';

const AllStudents = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <div class='container'>
      <div>
        <ul id='student-container-list' className='student-list'>
          {students.map((student) => (
            <li key={student.id}>
              <div>
                <Link to={`/students/${student.id}`} style={{textDecoration: 'none'}} class='linkName'>
                  <h3>{student.firstName}</h3>
                </Link>
                <div>
                  <button onClick={() => dispatch(deleteStudent(student.id))}>Remove</button>
                </div>
                <img src={student.imageUrl}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <AddStudentForm />
      </div>
    </div>
  )
};

export default AllStudents;
