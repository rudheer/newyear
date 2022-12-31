import { Box, Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'black'
    },
    tbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'yellow'
    },
    tmbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'blue',
        marginRight:'15px'
    },
    lt:{
        fontFamily:'Noto Nastaliq Urdu',
        fontSize:'64px',
        //color:'white'
    },
    rt:{
        fontFamily:'Passions Conflict',
        fontSize:'64px',
        paddingTop:'40px',
        color:'red'
    }
});

const Nheading = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.tbox}>
            <Box className={classes.tmbox}><Typography className={classes.lt}>Happy New Year - </Typography></Box>
            <Box className={classes.tmbox}><Typography className={classes.rt}>My Love &#9829;</Typography></Box>
        </Box>
    </Box>
  )
}

export default Nheading