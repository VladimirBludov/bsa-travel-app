import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
