import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('contains three navlinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length;
  expect(numLinks).toEqual(3);
});
it('contains three anchors via mount', () => {
  const numMount = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;
  expect(numMount).toEqual(3);
});
