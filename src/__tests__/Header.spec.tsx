import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/TheHeader';

const mockNavigate = vi.fn();

test('renders Header component correctly', async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check if the welcome message is in the document
  await expect.element(getByText('Welcome to StarWars characters!🌠')).toBeInTheDocument();

  // Check if the Starnavi link is in the document
  await expect.element(getByText('Test task for Starnavi')).toBeInTheDocument();
});

test('navigates to home on StarWars link click', async () => {
  // Mock useNavigate

  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      ...actual,
      useNavigate: () => mockNavigate,
    };
  });

  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Simulate a click on the StarWars link
  await (getByText('StarWars')).click();

  // Check if navigate was called with the correct path
  expect(mockNavigate).toHaveBeenCalledWith('/');
});

test('navigates to Starnavi on link click', async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const starnaviLink = getByText('Starnavi');

  // Check if the link has the correct href
  expect.element(starnaviLink).toHaveAttribute('href', 'https://www.starnavi.io/');
  expect.element(starnaviLink).toHaveAttribute('target', '_blank');
});
