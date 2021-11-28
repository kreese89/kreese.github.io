import * as React from 'react';
import '../App.css';
import { Octokit } from 'octokit';
import { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";


const Projects = () => {
  const oc = new Octokit();
  const [projects, setProjects] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await oc.request("GET /users/kreese89/repos");
      const data = await response.data;
      console.log(data);
      setProjects(data);
    }
    fetchData();
  }, []);
  
  return (
  <div className='App-header' id="Projects">
        <p>Projects</p>
  </div>);
}

export default Projects;