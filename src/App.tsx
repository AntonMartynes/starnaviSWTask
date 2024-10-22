
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/router';
import Header from './components/TheHeader';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;