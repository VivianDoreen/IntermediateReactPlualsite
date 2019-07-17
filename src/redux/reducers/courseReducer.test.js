import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

it('should add course when passed CREATE_COURSE_SUCCESS', () => {
  const initialState = [
    {
      id: 1,
      title: 'A'
    },
    {
      id: 2,
      title: 'B'
    },
    {
      id: 3,
      title: 'C'
    }
  ];
  const course = { id: 3, title: 'New title' };
  //   const action = actions.createCourseSuccess(course);
  const action = actions.updateCourseSuccess(course);
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id === course.id);
  const untouchedCourse = newState.find((a) => a.id === 1);
  //   expect(newState.length).toEqual(3);
  //   expect(newState[1].title).toEqual('B');
  //   expect(newState[2].title).toEqual('C');
  expect(newState[2].title).toEqual('New title');
  expect(newState.length).toEqual(3);
  expect(updatedCourse.title).toEqual('New title');
  expect(untouchedCourse.title).toEqual('A');
});
