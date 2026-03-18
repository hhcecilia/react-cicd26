import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const heading = screen.getByText(/React CI\/CD with Docker & Jenkins/i);
  expect(heading).toBeInTheDocument();
});

test('renders the pipeline status message', () => {
  render(<App />);
  const message = screen.getByText(/Pipeline is running!/i);
  expect(message).toBeInTheDocument();
});

test('renders App-header element', () => {
  render(<App />);
  const header = document.querySelector('.App-header');
  expect(header).toBeInTheDocument();
});
