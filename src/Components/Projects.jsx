import * as React from 'react';
import '../App.css';
import { Octokit } from 'octokit';
import { useState, useEffect } from 'react';
import { Box, Grid, Card, CircularProgress, CardHeader, CardContent, Typography } from "@material-ui/core";


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
  <div className='App-header' id="Projects">
    <Box style={{width: '50%'}}>
      <Grid container spacing={1} style={{'margin-left': 'auto' }}>
          {projects.map(project => (
            <Grid >
              <Card variant="outlined" raised style={{display: 'inline-block', width: '75px'}}>
                <CardHeader>
                  {project.name}
                </CardHeader>
                <CardContent>
                  <Typography>
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