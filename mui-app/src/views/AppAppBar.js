import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const rightLink = {
  fontSize: 16, color: 'common.white', ml: 3,
};

function AppAppBar() {
  return (<div>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent: 'space-between', background: 'white'}}>
          <Box sx={{flex: 1}}>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={{
                minWidth: 275, ':hover': {
                  boxShadow: 20,
                },
              }}
            >
              {'Shop'}
            </Link>
          </Box>
          <Link
            variant="h4"
            underline="none"
            href="/"
          >
            {'Aroma'}
          </Link>
          <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
            <Link href="/" sx={rightLink}>
              <PersonOutlineOutlinedIcon color="primary"/>
            </Link>
            <Link href="/" sx={rightLink}>
              <ShoppingCartOutlinedIcon color="primary"/>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>);
}

export default AppAppBar;