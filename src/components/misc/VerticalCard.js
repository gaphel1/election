import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    // width: 500,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    // width: 300,
    height:220
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.length)
  return (
    <Card className={classes.root}>
        <CardMedia
          className= {classes.cover}
          image="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
          title="Live from space album cover"
        />
        {/* props */}
        {props.length}
        
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            March 20 2019
            Mac Miller 
          </Typography>
          <Typography component="h3" variant="h9">
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            this is about the live of people who we do not know
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button color={"primary"} fullWidth>
          Find Out More <Icon>chevron_right_rounded</Icon>
        </Button>
        </div>
      </div>
      
    </Card>
  );
}
