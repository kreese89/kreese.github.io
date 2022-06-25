import * as React from 'react';
import '../App.css';
import headshot from '../hs.JPG';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { scroller } from 'react-scroll';

const About = () => {

  const handleClick = () => {
    scroller.scrollTo("Experience", { smooth: true })
  };

  return (
    <div className='section' id="About Me">
      <Box sx={{width: '75%'}}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <img src={headshot} alt="Me!" style={{width: '480px', height: 'auto'}}/>
            </Box>
          </Grid>
          <Grid item xs={6}>
          <Box>
            <Typography variant="h3" style={{marginTop: '15px'}}>
              Kyle Reese  
            </Typography>
            <Typography variant="h6" style={{marginTop: '15px'}}>
              Hey there! I'm Kyle and I'm a Privacy Engineer at Meta. Previously, I was doing full-stack Software Engineering at Meta as a contingent worker through Accenture.
              Before that, I was an undergrad student at
              the UMD, where I studied Math and Computer Science.
            </Typography>
            <Typography variant="h6" style={{marginTop: '15px'}}>
              I'm interested in Systems + Networks (and their security), OS, PL, and ML. {' '} 
              {<Link onClick={handleClick}>{"Previously"}</Link>} I've studied defeating network-level internet censorship
              using genetic algorithms. 
              Recently I've been working on a productivity platform designed to connect motivated creators, builders, artists, and investors.
            </Typography>
            <Typography variant="h6" style={{marginTop: '15px'}}>
              When I'm not sitting at a computer I like to go to the gym, read, and play Super Smash Bros Melee competitively.
            </Typography>
          </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;