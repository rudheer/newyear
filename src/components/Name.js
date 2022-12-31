import { Typography,Box, Modal } from '@material-ui/core'
import React, { useState } from 'react'
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
        justifyContent:'center',
        width:'100px',
        aspectRatio:'1',
        borderImage:'radial-gradient(#AF0C37 69%,#0000 70%) 84.5% fill/100%',
        clipPath:'polygon(-41% 0,50% 91%, 141% 0)',
        margin:'5px'
    },  
    text:{
        fontSize:'64px',
        fontFamily:"Alice",
        color:'#DEBA62'
    },
    mobox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:'300px',
        width:'50%',
        backgroundColor:'#282828',
        marginLeft:'25%',
        marginTop:'5%'
    },
    mibox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'15px',
        color:'white'
    }
});

const Name = () => {
    const classes=useStyles();
    const [cbox,setcbox]=useState(false);
    const [hbox,sethbox]=useState(false);
    const [abox,setabox]=useState(false);
    const [nbox,setnbox]=useState(false);
    const [dbox,setdbox]=useState(false);
    const [ubox,setubox]=useState(false);
  return (
    <Box className={classes.wrapper}>
        <a onClick={()=>setcbox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>c</Typography>
        </Box></a>
        <a onClick={()=>sethbox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>h</Typography>
        </Box></a>
        <a onClick={()=>setabox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>a</Typography>
        </Box></a>
        <a onClick={()=>setnbox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>n</Typography>
        </Box></a>
        <a onClick={()=>setdbox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>d</Typography>
        </Box></a>
        <a onClick={()=>setubox(true)} style={{"cursor":'pointer'}}><Box className={classes.tbox}>
            <Typography className={classes.text}>u</Typography>
        </Box></a>
        <Modal
        open={cbox}
        onClose={()=>setcbox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}><b>C</b> -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>caring</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}>When I got fever you were there to bring meds for me, when I got cold, you were there to bring balm for me, when I was eating junk and suffering from stomach ache you were taking me to fruit store and giving me tips regarding vajra asana. You were always there for me and you always cared for me. Thank you so much for everything, I promise you I will give lots of care and love this year and always make you happy.</Typography>
                </Box>
            </Box>
        </Modal>
        <Modal
        open={hbox}
        onClose={()=>sethbox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}><b>H</b> -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>hugs</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}>thousand troubles, hundred tensions, many upset moments and all this has one medicine that's your hug. It makes me feel good, makes me feel relaxed and I love hugging you babe. I want that forever and this new year i wish i will get many in both india as well as japan.</Typography>
                </Box>
            </Box>
        </Modal>
        <Modal
        open={abox}
        onClose={()=>setabox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}><b>A</b> -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>anger</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}> haha enti idi rasa anukuntunava, i love your anger as well my babuuu. You look so cute when u get angry, potti height and full kopam tho arustav it doesn't make me angry rather it makes me hug you tight and squeeze you. My cutie. But konchem kopam taginchuko bangu, high bp vastadi lekapothe..hehe. I hope this year kastha takkuva titinchukunta nen.</Typography>
                </Box>
            </Box>
        </Modal>
        <Modal
        open={nbox}
        onClose={()=>setnbox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}><b>N</b> -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>nostalgia</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}>the past days made me behave differently which I didn't want to, I hope after some days the situation changes and we come back normal as we were in the past. We can be those cute love birds who give all their time to each other roaming in campus, cuddling together and walking by holding hands. I want everything back and I shall give my 100% to give all joy and many more memories this year , love you doll.</Typography>
                </Box>
            </Box>
        </Modal>
        <Modal
        open={dbox}
        onClose={()=>setdbox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}><b>D</b> -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>disappointment</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}>yes it's true, i disappointed you many times. I never reached your expectations and always made you angry. I have never been a great boyfriend who always makes you happy and many times disappointed you. This year i shall take an oath that i shall make sure that i reach your expectations and make you happy and nee nundi best boyfriend award geluchukunta. I am really really really sorry for what I have done to you, I am extremely sorry.</Typography>
                </Box>
            </Box>
        </Modal>
        <Modal
        open={ubox}
        onClose={()=>setubox(false)}
        >
            <Box className={classes.mobox}>
                <Box className={classes.mibox}>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>R<b>U</b>dhii -</Typography>
                    <Typography style={{"fontSize":'48px',"fontFamily":'Dancing Script'}}>proposal to chandu</Typography>
                </Box>
                <Box className={classes.mibox}>
                    <Typography style={{"fontFamily":'Courgette',"background":" linear-gradient(to right,#2193b0,#6dd5ed)","WebkitTextFillColor":'transparent',"WebkitBackgroundClip":'text'}}>baby, i love you soo much. Ee kooni rojulu we had a bad time and things were going bad, but we can correct things. Potti break up antav entee, nuvu lekunda nen undalenu. You are my everything. Ee year we shall be happy together bangu, i shall take care of you, ninnu baga chusukunta. Nuvu titina kuda padi unta ala em annanu ninnu reverse, but nannu ala vadileyake. I love you soo much and please don't leave me. Happy new year from your love.</Typography>
                </Box>
            </Box>
        </Modal>
    </Box>
  )
}

export default Name