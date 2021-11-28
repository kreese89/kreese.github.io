import * as React from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  ButtonGroup,
  MenuItem 
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-scroll';

const Navbar = () => {
  const sections = ['About Me', 'Experience', 'Projects'];

  return (
    <AppBar position="sticky" >
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
          <Box transformOrigin={{vertical: 'top', horizonal: 'right'}}>
            <Button href="https://github.com/kreese89">
              <GitHubIcon />
            </Button>
            <Button href="https://www.linkedin.com/in/kylepreese/" >
              <LinkedInIcon />
            </Button>
            <Button href="https://twitter.com/KReese89">
              <TwitterIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;