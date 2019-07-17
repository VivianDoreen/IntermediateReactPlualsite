// import React from 'react';
// import { mount } from 'enzyme';
// import { authors, courses, newCourse } from '../../../tools/mockData';
// import { ManageCoursePage } from './ManageCoursePage';

// const render = (args) => {
//   const defaultProps = {
//     courses,
//     authors,
//     history: {},
//     saveCourse: jest.fn(),
//     loadAuthors: jest.fn(),
//     loadCourses: jest.fn(),
//     course: newCourse,
//     match: {}
//   };
//   const props = { ...defaultProps, ...args };
//   return mount(<ManageCoursePage {...props} />);
// };

// it('sets error when attempting to save an empty title field', () => {
//   const wrapper = render();
//   wrapper.find('form').simulate('submit');
//   let error = wrapper.find('.alert').first();
//   expect(error.text()).toBe('title is required');
// });

import React from 'react';
import { mount } from 'enzyme';
import { courses, authors, newCourse } from '../../../tools/mockData';
import { ManageCoursePage } from './ManageCoursePage';

const render = (args) => {
  const defaultProps = {
    courses,
    authors,
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    saveCourse: jest.fn(),
    history: {},
    match: {},
    course: newCourse
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
};
it('should show errors the button to save when', () => {
  const wrapper = render();
  wrapper.find('form').simulate('submit');
  let error = wrapper.find('.alert').first();
  expect(error.text()).toEqual('title is required');
});
