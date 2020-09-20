import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ChartTitle from './ChartTitle';
import ChartPage from '../Pages/ChartPage';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
})
)

;

function Deposits(props) {
  const classes = useStyles();
  return (
    <div className={classes.depositContext} align="center" >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
      <ChartTitle> {props.fname} </ChartTitle>
      <Typography component="p" variant="h4">
        123
      </Typography>
      {/* <Typography color="textSecondary" >
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </div>
  );
}
export default Deposits