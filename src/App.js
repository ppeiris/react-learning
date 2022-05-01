import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

//<Button variant='contained' color='primary'>this is a test</Button>

import MainNavigation from './componenets/layout/MainNavigationMenue';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './componenets/layout/Layout';


function App() {
  return <Layout>
    <Routes>
    <Route path="/" element={<AllMeetupsPage />} />
    <Route path="/new" element={<NewMeetup />} />
    <Route path="/fav" element={<Favorites />} />
    </Routes>
  </Layout>;
}

export default App;
