import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import Card from '@material-ui/core/Card';

import HorizontalCard from '../misc/HorizontalCard'

// grid center
// <Grid
//   container
//   spacing={0}
//   direction="column"
//   alignItems="center"
//   justify="center"
//   style={{ minHeight: '100vh' }}
// >
{/* <Grid container justify = "center"></Grid> */}
{/* <Grid item xs={3} align="center"></Grid> */}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: '50vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider:{
    margin: theme.spacing(0.5)
  },
  cover: {
    display:'flex',
    // width: 400,
    height:'50vh'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}
    // style={{ height: '60vh'}}
  >
    <Container  maxWidth="xl" >
      {/* top news */}
      <Grid container spacing={2} padding={0}>
        <Grid item sm={2}/>
        <Grid item className={classes.divider} sm={8} xs={12}>
          asdfdasf
          sdfas
        <Divider  />
          <Typography  align= 'left' variant="h1" fontWeight="fontWeightBold" component="h2" gutterBottom>
            About the grass
          </Typography>
          
          <CardMedia
            className={classes.cover}
            image="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
            title="Live from space album cover"
          />
          <div className={classes.avatar}>
              <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
              B
              </Avatar>
              <Avatar className={classes.orange}>
                <InstagramIcon />
              </Avatar>
              <Avatar >
                
              </Avatar>
              <Avatar className={classes.orange}>
              
              </Avatar>
              <Typography variant="subtitle1" align= 'left' gutterBottom>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          </div>
          <Typography variant="subtitle1" align= 'left' gutterBottom>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Divider  />
          <Typography variant="body1"  fontWeight="fontWeightBold" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            Loremsdf sdfasdf
            sdfasfd
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            Loremsdf sdfasdf
            sdfasfd
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            Loremsdf sdfasdf
            sdfasfd
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            Loremsdf sdfasdf
            sdfasfd
          </Typography>
          
          <Grid container item xs={12} sm={12} spacing={2} >
            <Grid item className={classes.divider} xs={12}>
              <Divider  />
              <div>Buddhism Event</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <HorizontalCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <HorizontalCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <HorizontalCard/>
            </Grid>
            <Grid item xs={12} sm={12}>
            <HorizontalCard/>
            </Grid>
          </Grid>
         
          </Grid>
        
        <Grid item xs={0} sm={2}/>
        
        {/* <Grid item xs={12} sm={3}>
          
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <HorizontalCard/>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
      </Container>
    </div>
  );
}
