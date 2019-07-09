import React from 'react';
import CourseForm from './CourseForm';
import { cleanup, render } from 'react-testing-library';

afterEach(cleanup);

const renderCourseForm = (args) => {
  let defaultProps = {
    course: {},
    authors: [],
    onSave: () => {},
    onChange: () => {},
    saving: false,
    errors: {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
};

it('should render "Add course Header"', () => {
  const { getByText } = renderCourseForm();
  getByText('Add Course');
});
it('should label save when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText('Save');
});
it('should label save when not saving', () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
//   debug();
  getByText('Saving...');
});
