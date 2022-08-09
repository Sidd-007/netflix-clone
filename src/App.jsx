import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Account from './pages/Account/Account';
import MovieDetails from './components/MovieDetails/MovieDeatails';
import TVDetails from './components/TVDetails/TVDetails'
import { ToastContainer} from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route
                        path='/account'
                        element={
                            <ProtectedRoute>
                                <Account />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/movie-details/:id' element={<MovieDetails />} />
                    <Route path='/tv-details/:id' element={<TVDetails />} />
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
