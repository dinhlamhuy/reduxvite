import React from 'react';
import { Box, Grid, FormHelperText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Stack } from '@mui/system';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import LeftContent from '../components/LeftContent'
import RightContent from '../components/RightContent'
import MainContent from '../components/MainContent'
const Home = () => {
  const useStyles = makeStyles(() => ({
    fullscreen: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.fullscreen} >
      <Box sx={{ border: '1px solid red' }} >
        <Stack direction="column" justifyContent='center'>
          <Grid container >
            <Grid item xs={6} sx={{ border: '1px solid red', padding: '15px' }}>
              <span style={{ border: '1px solid black' }}>xs=8</span>
            </Grid>
            <Grid item xs={6} sx={{ border: '1px solid red', padding: '15px' }}>
              <span style={{ border: '1px solid black' }}>xs=8</span>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item xs={6} sx={{ border: '1px solid red', padding: '15px' }}>
              <span style={{ border: '1px solid black' }}>xs=8</span>
            </Grid>
            <Grid item xs={6} sx={{ border: '1px solid red', padding: '15px' }}>
              <span style={{ border: '1px solid black' }}>xs=8</span>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box sx={{ border: '1px solid red' }}>
        <Stack>
          <Grid container>
            <Grid item xs={8} md={5}>
              <FormControl>
                <FormLabel>
                  Which fsksadjidsjdj
                </FormLabel>
                <RadioGroup row name="radioButtonGroup">
                  <FormControlLabel value='Bootstrap' control={<Radio />} label='Bootstrap' />
                  <FormControlLabel value='Laravel' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel1' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel2' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel3' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel4' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel5' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel6' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Laravel7' control={<Radio />} label='Laravel' />
                  <FormControlLabel value='Larave8' control={<Radio />} label='Laravel' />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box>

        <Stack direction='row' justifyContent='space-between' flex={1}>
          <LeftContent />
          <MainContent />
          <RightContent />
        </Stack>
      </Box>
    </Box>

  );
};

export default Home;