import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

const mockNavigate = vi.fn();

test('renders NotFound component correctly', async () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // Check if the 404 message is in the document
  await expect.element(getByText('404 - Page Not Found')).toBeInTheDocument();

  // Check if the Go Back button is in the document
  await expect.element(getByRole('button', { name: 'Go Back' })).toBeInTheDocument();
});

test('navigates to home on button click', async () => {
  // Mock useNavigate
  
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      ...actual,
      useNavigate: () => mockNavigate,
    };
  });

  const { getByRole } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // Simulate a click on the Go Back button
  await (getByRole('button', { name: 'Go Back' })).click();

  // Check if navigate was called with the correct path
  expect(mockNavigate).toHaveBeenCalledWith('/');
});
