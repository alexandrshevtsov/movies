import * as React from 'react';
import { mount } from 'enzyme';
import { SearchPane } from './search-pane';

describe('SearchPane', () => {
  it('should contain input and button', () => {
    const query = 'black';
    const onSearch = jest.fn();
    const component = mount(<SearchPane query={query} onSearch={onSearch} />);
    const queryText = component.find('input');
    expect(queryText.length).toBe(1);
    const searchButton = component.find('button');
    expect(searchButton.length).toBe(1);
    searchButton.simulate('click');
    expect(onSearch).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
