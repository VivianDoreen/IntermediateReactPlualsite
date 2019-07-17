import * as type from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadCoursesSuccess = (courses) => ({
  type: type.LOAD_COURSES_SUCCESS,
  courses
});

/**
 * function that fetches a course
 */
export const createCourseSuccess = (course) => ({
  type: type.CREATE_COURSE_SUCCESS,
  course
});

export const updateCourseSuccess = (course) => ({
  type: type.UPDATE_COURSE_SUCCESS,
  course
});

export const deleteCourseOptimistic = (course) => ({
  type: type.DELETE_COURSE_OPTIMISTIC,
  course
});

/**
 * Fetches all the courses
 * @returns {function}
 */
export const loadCourses = () => (dispatch) => {
  dispatch(beginApiCall());
  return courseApi
    .getCourses()
    .then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch((error) => {
      dispatch(apiCallError(error));
      throw error;
    });
};
export const saveCourse = (course) => (dispatch, getState) => {
  dispatch(beginApiCall());
  return courseApi
    .saveCourse(course)
    .then((savedCourse) => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    })
    .catch((error) => {
      dispatch(apiCallError(error));
      throw error;
    });
};

export const deleteCourse = (course) => (dispatch) => {
  dispatch(deleteCourseOptimistic(course));
  return courseApi.deleteCourse(course.id);
};
