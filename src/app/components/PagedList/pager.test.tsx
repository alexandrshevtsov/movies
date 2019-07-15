import * as React from 'react';
import { mount } from 'enzyme';
import { Pager } from './pager';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Pager', () => {
  it('rendering and navigation', () => {
    const pageClick = jest.fn();
    const component = mount(
      <Router>
        <Pager
          batchCount={3}
          batchIndex={1}
          className="myPager"
          itemClassName="myPagerItem"
          pageLink="/test"
          pageClick={pageClick}
        />
      </Router>
    );
    const pager = component.find('ul');
    expect(pager.length).toBe(1);
    expect(pager.hasClass('myPager')).toBe(true);
    const pages = component.find('li');
    expect(pages.length).toBe(3);
    pages
      .first()
      .find('a')
      .simulate('click');
    expect(pages.first().hasClass('myPagerItem')).toBe(true);
    expect(pageClick).toBeCalledTimes(1);
    expect(pageClick).toBeCalledWith(0);
    expect(component).toMatchSnapshot();
  });
});
