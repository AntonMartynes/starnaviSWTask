import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import CharList from '../components/CharList';
import CharCard from '../components/CharCard';
import NotFound from '../components/NotFound';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<CharList />}/>
      <Route path={ROUTES.CHAR} element={<CharCard />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}