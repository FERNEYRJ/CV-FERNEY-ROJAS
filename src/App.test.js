import { render, screen } from '@testing-library/react';
import App from './App';

test('renders principal cv headings', () => {
  render(<App />);

  expect(screen.getByText(/Jose Ferney Rojas Jimenez/i)).toBeInTheDocument();
  expect(screen.getByText(/Experiencia laboral/i)).toBeInTheDocument();
  expect(screen.getByText(/Disponible para roles de ingenieria/i)).toBeInTheDocument();
});
