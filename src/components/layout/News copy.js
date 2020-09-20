import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import HorizontalCard from '../misc/HorizontalCard'
import VerticalCard from '../misc/VerticalCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    // height: '50vh'
  },
  row:{
    flexDirection:'row'
  },   
  column:{
    flexDirection:'column'
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

function FullWidthGrid(props) {
  const classes = useStyles();
  const { width } = props;
  return (
    <div className={classes.root}
    // style={{ height: '60vh'}}
  >
    <Container  maxWidth="lg" >
      {/* top news */}
      <Grid container spacing={1} padding={1} className={classes.root} >        
        <Grid item className={classes.divider} xs={12}>
          {/* <Paper className={classes.divider}>xs=12 headsfsafasdf </Paper> */}
          <Divider  variant="none" />
          <p>Latest {width}  </p>
        </Grid>
        <Grid item className={classes.root}  xs={12} sm={6}>        
        <Grid item xs={12} height= '230'>
          <VerticalCard length={width}/>      
        </Grid>
        </Grid>
        <Grid item className={classes.row}  xs={12} sm={6} >
        <Grid container className={classes.row} spacing={1} xs={12}  >
          <Grid item xs={12} sm={12}  >
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
        <Grid item className={classes.row}  xs={12} sm={12} >
        <Grid container className={classes.row} spacing={1} xs={12}  >
          <Grid item xs={12} sm={3}  >
           <VerticalCard/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <VerticalCard/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <VerticalCard/>
          </Grid> 
          <Grid item xs={12} sm={3}>
            <VerticalCard/>
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

FullWidthGrid.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(FullWidthGrid);
