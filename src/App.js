import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import MoreProjects from './pages/MoreProjects';

function App() {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/more-project' element={<MoreProjects />} />
            </Routes>
        </Container>
    );
}

export default App;
