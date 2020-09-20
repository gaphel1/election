import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
  },
  content: {
    // flex: '1 0 ',
  },
  cover: {
    width: '130%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // width: '100%',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From 
          </Typography>
          {/* <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography> */}
        </CardContent>
        <div className={classes.controls}>
        <Typography component="h3" variant="h9">
            this is about the live of people who we do not know
            this is about the live of people who we do not know
            {/* this is about the live of people who we do not know */}
        </Typography>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        title="Live from space album cover"
      />
    </Card>
  );
}