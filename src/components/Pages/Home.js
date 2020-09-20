import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CarousalStepper from '../misc/CarousalStepper';
import News from '../layout/News';
import Card from '../misc/Card'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(8, 0, 6),
      marginTop: theme.spacing(2),

    },
}))
function Home(props) {
    const classes = useStyles();
    return (
        <div>
            <Container>
            {/* <CarousalStepper/> */}
            </Container>
            
            {/* <Container className={classes.heroContent} maxWidth="lg" >
                
                headfasfasdfa

            </Container> */}
            <News/>
            {/* <Card/> */}
        </div>
    )
}

Home.propTypes = {

}

export default Home

