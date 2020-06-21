// import { ExampleComponent } from '.'

// describe('ExampleComponent', () => {
//   it('is truthy', () => {
//     expect(ExampleComponent).toBeTruthy()
//   })
// })

import * as React from 'react';
import Greeting from './components/greeting';
import renderer from 'react-test-renderer';

it('render hello world header', () => {
  const component = renderer.create(
    <Greeting text='Ahmed!' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
