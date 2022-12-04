import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have corrrect title', () => {
  render(<App />);
  const titleText = screen.getByText("Awesome Counter");
  expect(titleText).toBeInTheDocument();
});
