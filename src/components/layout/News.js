import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import HorizontalCard from '../misc/HorizontalCard'
import VerticalCard from '../misc/VerticalCard'


//card
// import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    // height: '50vh'
  },
  column:{
    flexDirection:'row'
  },   
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider:{
    margin: theme.spacing(0.5)
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}
    // style={{ height: '60vh'}}
  >
    <Container  maxWidth="lg" >
      {/* top news */}
      <Grid container spacing={2} padding={2} className={classes.root} >        
        <Grid item className={classes.divider} xs={12}>
          {/* <Paper className={classes.divider}>xs=12 headsfsafasdf </Paper> */}
          <Divider  variant="none" />
          <p>Latest</p>
        </Grid>
        <Grid item className={classes.root} spacing={2}  xs={12} sm={6}>
        <Grid item xs={12} height= '230'>
          <VerticalCard/>      
        </Grid>
        </Grid>
        <Grid item className={classes.column}  xs={12} sm={6} >
        <Grid container className={classes.column} spacing={2} xs={12}  >
          <Grid item xs={12} sm={12}>
           <HorizontalCard/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <HorizontalCard/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <HorizontalCard/>
          </Grid>        
        </Grid>
        </Grid>
        <Grid item className={classes.divider} xs={12}>
          <Divider  variant="none" />
          <p>Buddhism Event</p>
        </Grid>
        
      </Grid>
      </Container>
    </div>
  );
}
