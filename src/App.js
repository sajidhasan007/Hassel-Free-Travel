import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home_page/Home/Home';
import Event from './Pages/Event/Event';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Firebase/AuthProvider';
import PrivateRoute from './Pages/Privateroute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import ManageEvent from './Pages/ManageEvent/ManageEvent';
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/event/:eventid'>
              <Event></Event>
            </PrivateRoute>

            <PrivateRoute path='/book/:eventid'>
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path='/manageEvent'>
              <ManageEvent></ManageEvent>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
