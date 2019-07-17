import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

//test an async action configure the redux mock store
const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
describe('Async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  describe('load courses thunk', () => {
    it('should create BEGIN_API_CALL and LOAD COURSES_SUCCESS when loading course', () => {
      //captures all fetch calls and responds with data
      fetchMock.mock('*', {
        body: courses,
        headers: { 'content-type': 'application/json' }
      });
      const expectedAction = [
        {
          type: types.BEGIN_API_CALL
        },
        {
          type: types.LOAD_COURSES_SUCCESS,
          courses
        }
      ];
      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses(courses)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
describe('createCourseSuccess', () => {
  it('should create a CREATE_COURSE_ACTION', () => {
    const course = courses[0];
    const expectedCourse = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    const action = courseActions.createCourseSuccess(course);
    expect(action).toEqual(expectedCourse);
  });
});
