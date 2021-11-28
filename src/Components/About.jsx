import * as React from 'react';
import '../App.css';
import headshot from '../hs.JPG';
import { Box, Container, Grid, Typography } from '@material-ui/core';

const About = () => {
return (
    <div className='App-header' id="About Me">
      <Box sx={{width: '75%'}}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <img src={headshot} alt="Me!" style={{width: '400px', height: 'auto'}}/>
            </Box>
          </Grid>
          <Grid item xs={6}>
          <Box>
            <Typography>
              Hello World!  
            </Typography>
          </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;