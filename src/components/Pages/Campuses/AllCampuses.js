import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampus, fetchAllCampuses, selectCampuses } from '../../Features/Campuses/AllCampusesSlice';
import AddCampusForm from './AddCampusForm';

const AllCampuses = () => {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  return (
    <div  class='container'>
      <div>
      <ul id='campus-container-list' className='campus-list'>
        {campuses.map((campus) => (
          <li key={campus.id}>
            <div >
              <Link to={`/campuses/${campus.id}`} style={{textDecoration: 'none'}} class='linkName'>
              <h3>{campus.name}</h3>
              </Link>
              <div>
              <button onClick={() => dispatch(deleteCampus(campus.id))}>Remove</button>
              </div>
              <img src={campus.imageUrl}/>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <AddCampusForm />
      </div>
    </div>
  )
};

export default AllCampuses;
