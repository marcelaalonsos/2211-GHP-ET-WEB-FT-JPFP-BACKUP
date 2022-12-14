
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCampuses from './Pages/Campuses/AllCampuses';
import SingleCampus from './Pages/Campuses/singleCampus';
import HomePage from './Pages/homePage';
import NavBar from './Pages/NavBar';
import AllStudents from './Pages/Students/AllStudents';
import SingleStudent from './Pages/Students/singleStudent';

const Main = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage /> } />
                    <Route path='/campuses' element={<AllCampuses />} />
                    <Route path='/campuses/:campusId' element={<SingleCampus />} />
                    <Route path='/students' element={<AllStudents />} />
                    <Route path='/students/:studentId' element={<SingleStudent />} />
                </Routes>
            </main>
        </div>
    );
};

export default Main;
