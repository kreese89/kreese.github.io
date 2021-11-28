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
      <Box sx={{marginLeft: '5%', marginTop: '1%'}}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Card variant="elevation" raised style={{overflow: 'auto', display: 'inline-block', minWidth: '50%'}}>
              <CardHeader 
                title={
                  <Typography variant="h1">
                    Geneva
                  </Typography>
                }
                subheader={
                   <Link href="https://geneva.cs.umd.edu/">censorship.ai</Link>
                }
                action={
                  <Button href="https://github.com/kkevsterrr/geneva">
                    <GitHubIcon />
                  </Button>
                }
              />
              <CardContent style={{marginTop: '-3%'}}>
                <Typography>
                  Geneva utilizes genetic algorithms and user-written plugins to automatically 
                  detect and evade packet-level internet censorship. Using this engine the team at Geneva has 
                  been able to make some groundbreaking work into the field of internet privacy and censorship. 
                </Typography>
                <Typography>
                  At Geneva, we've: 
                  <List dense style={{marginLeft: '2%', marginTop: '-1%', marginBottom: '-1%'}}>
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
              
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="elevation" raised style={{overflow: 'auto', display: 'inline-block', minWidth: '50%'}}>
              <CardHeader 
                title={
                  <Typography variant="h1">
                    Accenture
                  </Typography> 
                }/>
              <CardContent>
                Hello
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Experience;