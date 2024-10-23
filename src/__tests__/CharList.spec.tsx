import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { MemoryRouter } from 'react-router-dom';
import CharList from '../components/CharList';


test('renders charList component correctly', async () => {
  const { getByText } = render(
    <MemoryRouter>
      <CharList />
    </MemoryRouter>
  );
  await expect.element(getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  await expect.element(getByText('Wilhuff Tarkin')).toBeInTheDocument();
  await expect.element(getByText('Chewbacca')).toBeInTheDocument();
  await expect.element(getByText('Han Solo')).toBeInTheDocument();
  await expect.element(getByText('Greedo')).toBeInTheDocument();
  await expect.element(getByText('Jabba Desilijic Tiure')).toBeInTheDocument();
  await expect.element(getByText('Wedge Antilles')).toBeInTheDocument();
  await expect.element(getByText('Jek Tono Porkins')).toBeInTheDocument();
  await expect.element(getByText('Yoda')).toBeInTheDocument();
  await expect.element(getByText('Palpatine')).toBeInTheDocument();
});

test('renders charList component 2nd page correctly', async () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <CharList />
    </MemoryRouter>
  );
  await (getByRole('button', { name: '2' })).click();

  await expect.element(getByText('Boba Fett')).toBeInTheDocument();
  await expect.element(getByText('IG-88')).toBeInTheDocument();
  await expect.element(getByText('Bossk')).toBeInTheDocument();
  await expect.element(getByText('Lando Calrissian')).toBeInTheDocument();
  await expect.element(getByText('Lobot')).toBeInTheDocument();
  await expect.element(getByText('Ackbar')).toBeInTheDocument();
  await expect.element(getByText('Mon Mothma')).toBeInTheDocument();
  await expect.element(getByText('Arvel Crynyd')).toBeInTheDocument();
  await expect.element(getByText('Wicket Systri Warrick')).toBeInTheDocument();
  await expect.element(getByText('Nien Nunb')).toBeInTheDocument();
});

// test('navigates to home on button click', async () => {
//   // Mock useNavigate
  
//   vi.mock('react-router-dom', async () => {
//     const actual = await vi.importActual('react-router-dom');
//     return {
//       ...actual,
//       useNavigate: () => mockNavigate,
//     };
//   });

//   const { getByRole } = render(
//     <MemoryRouter>
//       <NotFound />
//     </MemoryRouter>
//   );

//   // Simulate a click on the Go Back button
//   await (getByRole('button', { name: 'Go Back' })).click();

//   // Check if navigate was called with the correct path
//   expect(mockNavigate).toHaveBeenCalledWith('/');
// });
