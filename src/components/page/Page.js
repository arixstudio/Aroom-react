import React from 'react';
import { Container } from '@mui/system';
import BottomNav from '../bottom nav/Bottom nav';
import ResponsiveAppBar from '../app bar/App bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'prevent-pull-refresh';
import '../../assets/fonts-fa.css';

import PrivatePart from '../private part/Private part';
import PrivateRoute from '../private routes/Private routes';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Stay from '../pages/stay/Stay';
import Notifications from '../pages/notifications/Notifications';
import Profile from '../pages/profile/Profile';
import Vouchers from '../pages/vouchers/Vouchers';

function Page() {

    return (
      <div className="noselect">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container fixed>
        <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/stay" element={<Stay />} />
                <Route exact path="/notifications" element={<Notifications />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/vouchers" element={<Vouchers />} />
              </Route>
            </Routes>
            
            <PrivatePart>
              <BottomNav className='bottom-nav'></BottomNav>
            </PrivatePart>
        </Router>
      </Container>    
      </div>

    );
}

export default Page;
