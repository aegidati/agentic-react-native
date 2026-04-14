import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Note: test renderer for React Native requires jest-expo and @react-native-community/test-utils
describe('App Component', () => {
  it('renders successfully', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toBeTruthy();
  });
});
