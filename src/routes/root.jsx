
import { Outlet} from 'react-router-dom';

import Header from '../components/header/Header.jsx'
import Sidebar from '../components/sideBar/Sidebar.jsx'
import Footer from '../components/footer/Footer.jsx'

export default function Root() {
    return (
      <>
      <Header/>
      <Sidebar/>
        <div id="detail">
          <Outlet />
      </div>
      <Footer/>
      </>
    );
  }
