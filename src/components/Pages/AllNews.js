import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CarousalStepper from '../misc/CarousalStepper';
import News from '../layout/News';
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
            
            
            <News/>
        </div>
    )
}

Home.propTypes = {

}

export default Home