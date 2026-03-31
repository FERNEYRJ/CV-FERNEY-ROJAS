import { render, screen } from '@testing-library/react';
import App from './App';

test('renders principal cv headings', () => {
  render(<App />);

  expect(screen.getByText(/José Ferney Rojas Jiménez/i)).toBeInTheDocument();
  expect(screen.getByText(/Trayectoria orientada a servicio/i)).toBeInTheDocument();
  expect(screen.getByText(/Disponible para roles de ingeniería de software/i)).toBeInTheDocument();
});
