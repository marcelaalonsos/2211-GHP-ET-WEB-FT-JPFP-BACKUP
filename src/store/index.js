
import { configureStore } from "@reduxjs/toolkit";
import allCampusesSlice from "../components/Features/Campuses/AllCampusesSlice";
import singleCampusSlice from "../components/Features/Campuses/SingleCampusSlice";
import allStudentsSlice from "../components/Features/Students/AllStudentsSlice";
import singleStudentSlice from "../components/Features/Students/SingleStudentSlice";


const store = configureStore({
  reducer: {
    campuses: allCampusesSlice,
    campus: singleCampusSlice,
    students: allStudentsSlice,
    student: singleStudentSlice,
  }
});

export default store;
