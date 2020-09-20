import React,{useCallback,useEffect,useRef, useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BarChart from '../Chart/BarChart';
import PieChart from '../Chart/PieChart';
import { red } from '@material-ui/core/colors';
import Summarys from '../DashboardComp/SummaryCard';
import Candidate from '../DashboardComp/CandidateCard';
import ChartTitle from "../DashboardComp/ChartTitle";
import './dashboard.css';
// import Orders from './Orders';
// []

const candidateLists = [{firstName:"enzin", lastName:"Doe", age:46}, 
                       {firstName:"ashi", lastName:"Doe", age:56}, 
                       {firstName:"dhondup", lastName:"Doe", age:76},
                       {firstName:"sdasJohn", lastName:"Doe", age:46}
                      ]; 
const colors = ['#6189FA', '#F36673', '#FDB648',  '#5ECB75']; 
                      
const  useStyles = makeStyles((theme) => ({
        root: {
            display:'flex',
            flexGrow: 1
        },    
        container: {            
            paddingBottom: theme.spacing(4),
        },
        papercolumn: {
            padding: theme.spacing(3),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
            flexGrow:1
        },
        paperrow: {
            paddingBottom: theme.spacing(3),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'row',
            // flexGrow:1
            // height: 240,
        },
        fixedHeight: {
            height: 400,
        },
        fixedHeights: {
          height: 180,
        },
        avatar: {
          height: 60,
          // backgroundColor: 
          // // '#6189FA'
          // // '#F36673',
          // // FDB648
          // '#5ECB75'
        },
    })
)

// const Column = ({ name }) => (
//   <React.Fragment>
//     <Grid item xs={12}>
//       <ContentBlock name={`${name} 1`} />
//     </Grid>
//     <Grid item xs={12}>
//       <ContentBlock name={`${name} 2`} />
//     </Grid>
//   </React.Fragment>
// );


function Dashboard(props) {
    const [candidateChoice, setCandidateChoice] = useState({firstName:"enzin",lastName:'sasdf'});
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.papercolumn, classes.fixedHeight);
    console.log( candidateChoice,'dsadfafs', )

    const selectedCandidate = (index) =>{      
      setCandidateChoice({...candidateChoice, firstName:index});
    }
    const {firstName  }=candidateChoice;
    return (
      <React.Fragment>
         <Container maxWidth="lg" className={classes.container}>  
          <Grid container spacing={0}>
            {/* candidae */}            
            <Grid container spacing={3} className={classes.paperrow} >
              {
                candidateLists.map((data,index)=>{
                  return (
                   <Grid key={'ssdd'+index} item xs={6} lg={3} >
                  <Paper className={classes.fixedHeights} >
                  <Button key={'ssd'+index} onClick={()=>selectedCandidate(data.firstName)}>On   </Button>
             
                   <Candidate fname={data.firstName}/>
                   
                   {/* {colors[index]} */}
                  </Paper>
                  <Paper style={{backgroundColor: colors[index]}}  className={classes.avatar} />
                </Grid>
              )
                })
              }             
            </Grid>

            {/* Chart */}
            <Grid container spacing={3} >
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper} align='center'>
              <ChartTitle>BarChart</ChartTitle>
                <BarChart fname={firstName}/>               
              </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} align='center'>
                <ChartTitle  >PieChart</ChartTitle>
                {/* <Summarys /> */}
                <PieChart/>
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
            </Grid>
          </Grid>
          
        </Container>
        </React.Fragment>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

