import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChartTitle from '../DashboardComp/ChartTitle';
import ChartPage from '../Pages/ChartPage';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    
  },
});

function Deposits() {
  const classes = useStyles();
  return (
    <div className={classes.depositContext} align="center" >
      <ChartTitle> Recent Deposits</ChartTitle>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" >
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </div>
  );
}
export default Deposits