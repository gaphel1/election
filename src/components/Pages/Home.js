import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CarousalStepper from '../misc/CarousalStepper';
import News from '../layout/News copy';
import Card from '../misc/Card'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    
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

