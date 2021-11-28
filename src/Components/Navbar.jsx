import * as React from 'react';
import { AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avater, 
  Button, 
  Tooltip, 
  MenuItem 
} from '@material-ui/core';
import { Link } from 'react-scroll';

const Navbar = () => {
  const sections = ['About Me', 'Experience', 'Projects'];

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={() => console.log(section)}>
                  <Typography textAlign="center" variant="h6" color="textPrimary">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Link key={section} to={section} smooth={true} spy={true}>
                <Button
                  key={section}
                  onClick={() => {console.log(section)}}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography variant="h6" color="inherit">
                  {section}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;