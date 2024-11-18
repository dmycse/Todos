import { render, cleanup } from '@testing-library/react';
import App from '../App';

describe('App', () => {

  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});