import * as React from 'react';
import '../App.css';
import { Box, Button, Card, CardHeader, CardContent, Grid, Link, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowIcon from '@material-ui/icons/ArrowRight';

const Experience = () => {
  return (
    <div id="Experience" className="section">
      <Box>
        <Typography variant="h3">
          Experience
        </Typography>
      </Box>
      <Box sx={{marginLeft: '2%', marginRight: '2%', marginTop: '1%'}}>
        <Grid container spacing={1}>
          <Grid item xs component={Card}>
              <CardHeader     
                title={
                  <Typography variant="h1">
                    Meta
                  </Typography>
                }
                subheader={
                   <Typography variant="subtitle2">February 2022 - Present</Typography>
                }
              />
              <CardContent style={{marginTop: '-3%'}}>
                <Typography>
                  I'm currently working as a Privacy Engineer at Meta, on the Privacy Incident Response Engineering team (PIRE).
                  Our goal is to provide high-quality engineering support to critical privacy incidents within the company, as well as to build
                  the detection and prevention frameworks to ensure we don't see the same incident twice.

                </Typography>
                <Typography>
                  We work across the various Meta tech stacks on our team. Most of our development occurrs in Hack + Javascript + React + Relay,
                  although depending on the project we will work in other stacks as well (e.g C++, Python, etc.).
                </Typography>
                <Typography>
                  We collaborate cross-functionally with investigatory, legal, and product teams to ensure incidents are properly diagnosed, mitigated, and remediated. 
                  We engineer solutions that resolve privacy issues while ensuring the underlying product's scalability and effectiveness are maintained.
                </Typography>
              </CardContent>
          </Grid>
          <Grid item xs component={Card}>
              <CardHeader 
                title={
                  <Typography variant="h1">
                    Accenture
                  </Typography> 
                }
                subheader={
                  <Typography variant="subtitle1">
                    January 2021 - January 2022
                  </Typography>
                }  
              />
              <CardContent style={{marginTop: '-3%'}}>
                <Typography>
                  Worked as a Full-Stack Software Engineer at Accenture. While with Accenture I worked as a contingent worker at 
                  Meta, where me and a team of other Meta/Accenture SWE's worked on building out
                  an internal portal designed for Meta's thousands of global vendors to centralize the tooling, communcations,
                  and resources that they may need. Worked in Meta's web stack, utilizng Javascript and React on 
                  the frontend, Hack on the backend, and GraphQL to construct our API (with Relay as our client)
                </Typography>
                <Typography>
                  I also interned with Accenture twice while attending college: first as a Consulting Summer Analyst (where I helped direct several 
                  in-flight digital projects and conducted and communicated a data analysis on the efficiency of the client's
                  completion of projects), and second as a Technology Summer Analyst (where I assisted the client in 
                  the health and maintenance of their web application and participated in the Accenture Technology Hackathon)
                </Typography>
              </CardContent>
          </Grid>
          <Grid item xs component={Card}>
              <CardHeader     
                title={
                  <Typography variant="h1">
                    <Link href="https://geneva.cs.umd.edu/"> Geneva </Link>
                  </Typography>
                }
                subheader={
                   <Typography variant="subtitle2">October 2019 - June 2021</Typography>
                }
                action={
                  <Button href="https://github.com/kkevsterrr/geneva">
                    <GitHubIcon />
                  </Button>
                }
              />
              <CardContent style={{marginTop: '-3%'}}>
                <Typography>
                  Previously, I was a researcher and developer at Geneva. Geneva utilizes genetic algorithms and user-written plugins to automatically 
                  detect and evade packet-level internet censorship. Using this engine the team at Geneva has 
                  been able to make some groundbreaking work into the field of internet privacy and censorship. 
                </Typography>
                <Typography>
                  At Geneva, we've: 
                  <List dense style={{ marginTop: '-1%', marginBottom: '-1%'}}>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowIcon />
                      </ListItemIcon>
                      <ListItemText primary="Automated the discovery of client and server-side evasion strategies"/>
                    </ListItem> 
                    <ListItem>
                      <ListItemIcon>
                        <ArrowIcon />
                      </ListItemIcon>
                      <ListItemText primary="Shed light into previously unstudied censorship systems around the globe, and"/> 
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowIcon />
                      </ListItemIcon>
                      <ListItemText primary="Demonstrated how to weaponize censoring middleboxes to launch TCP Reflected Amplification 
                      attacks with factors greater than 100x."/> 
                    </ListItem>
                  </List>
                </Typography>
                <Typography >
                Geneva's public build is completely open-source and readily available.
              </Typography>
              </CardContent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Experience;