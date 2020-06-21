import * as React from 'react';
import Greeting from '../components/greeting';
import renderer from 'react-test-renderer';

test('render hello world header', () => {
    const component = renderer.create(
        <Greeting text='World!' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});