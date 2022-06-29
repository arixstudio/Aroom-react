import './Bottom nav.css';
import React from "react";
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Badge } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

function BottomNav() {
  const btnStyle = {color: '#fc0000', fontSize: '120px'};

  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (    
    <BottomNavigation
      className="noselect"
      value={value}
      onChange={handleChange} 
      sx={{ width: '100%', left: '0', position: 'absolute', bottom: 0 }}
    >
      <BottomNavigationAction style={{btnStyle}} label="" icon={<GridViewRoundedIcon />} component={Link} to='/dashboard'/>
      <BottomNavigationAction label="" icon={<ChangeHistoryRoundedIcon />} component={Link} to="/stay"/>
      <BottomNavigationAction label="" icon={<Badge badgeContent="2" variant="dot" color="success"><NotificationsNoneRoundedIcon /></Badge>} component={Link} to="/notifications" />
    </BottomNavigation>
    );

}

export default BottomNav;
