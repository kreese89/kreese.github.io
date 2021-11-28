import * as React from 'react';
import '../App.css';
import { Octokit } from 'octokit';
import { useState, useEffect } from 'react';
import { Box, Button, Grid, Card, CircularProgress, CardHeader, CardContent, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';


const Projects = () => {
  const oc = new Octokit();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await oc.request("GET /users/kreese89/repos");
      const data = await response.data;
      console.log(data);
      setProjects(data);
    }
    fetchData();
  }, []);
  
  if (projects == null) {
    return <CircularProgress />;
  }

  return (
    <div className='section' id="Projects">
      <Box style={{justifyContent: 'center', width: '50%', marginTop: '5%'}}>
        <Typography variant="h3">
          Projects
        </Typography>
        <Typography variant="h6">
          Below are some of the projects I've worked on and things I've made. Check them out!
        </Typography>
      </Box>
      <Box style={{marginTop: '10px', width: '50%'}}>
        <Grid container spacing={1} direction="row" justifyContent="center">
            {projects.map(project => (
              <Grid item xs={6}>
                <Card variant="outlined" raised style={{display: 'inline-block', height: '200px', overflow: 'auto'}}>
                  <CardHeader 
                    title={
                    <Typography variant="h6">{project.name}</Typography>
                    } 
                    subheader={
                      <Typography variant="caption" color="textSecondary">{project.topics.join(', ')}</Typography>
                    }
                    action={
                      <Button href={project.html_url}>
                        <GitHubIcon />
                      </Button>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>);
}

export default Projects;