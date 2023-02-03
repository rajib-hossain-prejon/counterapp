import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { Paper, Typography } from '@mui/material';

function App() {
  const [plants, setPlants] = useState(3276882);
  const [pads, setPads] = useState(327);
  const [meals, setMeals] = useState(7682);
  const [projects, setProjects] = useState(276);

  useEffect(() => {
    setInterval(() => {
      setPlants((prevPlants) => prevPlants + 10);
      setPads((prevPads) => prevPads + 10);
      setMeals((prevMeals) => prevMeals + 10);
      setProjects((prevProjects) => prevProjects + 10);
    }, 1000);
  }, []);

  let id = useRef();

  return (
    <div className='App'>
      <Paper
        elevation={16}
        sx={{ height: '50px', mx: 30, backgroundColor: 'green' }}
      >
        <Typography variant='h4' color='white' my={2}>
          Planted Tress
        </Typography>
      </Paper>
      <Paper
        elevation={16}
        sx={{
          width: '400px',
          height: '80px',
          mx: 'auto',
          backgroundColor: 'royalblue',
        }}
      >
        <Typography my={3} variant='h2' color='white'>
          {plants}{' '}
        </Typography>
      </Paper>

      {/* Meal  */}

      <Paper
        elevation={16}
        sx={{ height: '50px', mx: 30, backgroundColor: 'green' }}
      >
        <Typography variant='h4' color='white' my={2}>
          Meal Served
        </Typography>
      </Paper>
      <Paper
        elevation={16}
        sx={{
          width: '400px',
          height: '80px',
          mx: 'auto',
          backgroundColor: 'royalblue',
        }}
      >
        <Typography my={3} variant='h2' color='white'>
          {meals}{' '}
        </Typography>
      </Paper>

      {/*-------- Projects  --------*/}

      <Paper
        elevation={16}
        sx={{ height: '50px', mx: 30, backgroundColor: 'green' }}
      >
        <Typography variant='h4' color='white' my={2}>
          Projects
        </Typography>
      </Paper>
      <Paper
        elevation={16}
        sx={{
          width: '400px',
          height: '80px',
          mx: 'auto',
          backgroundColor: 'royalblue',
        }}
      >
        <Typography my={3} variant='h2' color='white'>
          {projects}{' '}
        </Typography>
      </Paper>

      {/*-------- Pads Served  --------*/}

      <Paper
        elevation={16}
        sx={{ height: '50px', mx: 30, backgroundColor: 'green' }}
      >
        <Typography variant='h4' color='white' my={2}>
          Pads Served
        </Typography>
      </Paper>
      <Paper
        elevation={16}
        sx={{
          width: '400px',
          height: '80px',
          mx: 'auto',
          backgroundColor: 'royalblue',
        }}
      >
        <Typography my={3} variant='h2' color='white'>
          {pads}{' '}
        </Typography>
      </Paper>
      {/* <Button
        variant='contained'
        color='success'
        sx={{ m: 2 }}
        onClick={() => handelTime()}
      >
        <PlayArrowIcon></PlayArrowIcon>
        Start
      </Button>
      <Button
        variant='contained'
        color='warning'
        sx={{ m: 2 }}
        onClick={() => clearInterval(id.current)}
      >
        <PauseIcon></PauseIcon>
        Pause
      </Button>
      <Button
        variant='contained'
        color='error'
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
        sx={{ m: 2 }}
      >
        <StopIcon></StopIcon>
        Reset
      </Button> */}
    </div>
  );
}

export default App;
