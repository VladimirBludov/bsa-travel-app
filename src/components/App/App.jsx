import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import TripPage from 'pages/TripPage';
import trips from '../../db/trips';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage trips={trips} />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="trip/:tripId" element={<TripPage trips={trips} />} />
          <Route path="*" element={<HomePage trips={trips} />} />
        </Route>
      </Routes>
    </>
  );
}
