import { Box } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import photu from'../images/photu.jpeg'

const useStyles=makeStyles({
    wrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'black',
        padding:'20px'
    },
    imbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        height:'382.5px',
        width:'288px',
        borderRadius:'10px'
    }
});

const Imgbox = () => {
    const classes=useStyles();
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.imbox}>
            <img className={classes.img} src={photu}/>
        </Box>
    </Box>
  )
}

export default Imgbox