import React from "react";
import { Container, Box,Toolbar,Typography,Drawer,AppBar,IconButton,List} from "@material-ui/core";
import{makeStyles} from "@material-ui/core/styles";
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>({
    menuButton:{
        marginRight: theme.spacing(2)
    },
    title:{
        marginRight: "auto"
    },
    drawer:{
        width: 300,
        martinTop: 100
    },
    iconAlign:{
        marginLeft:160
    },
    ListItem:{
        marginTop:20
    },
    content:{
        padding: theme.spacing(9)
    }
}));

const Sidebar = () => {
    const classes = useStyles();
    const [opens, setOpens] = useState(false);
    return (
       <Container className={classes.root}>
        <AppBar style={{ background: '#2E3B55'}}>
            <Toolbar>
                <Typography type="title" color="inherit" style={{flex:1}}>
                    Capermint
                </Typography>
                <IconButton edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpens(true)}>
                    <DehazeIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer open={opens} onClose={() =>setOpens(false)}>
<Box display="flex" p={4} mt={5} justifycontent = "space-between" fontWeight={500}>
    <Typography>
        <Box mt ={2} fontWeight ="fontWeightBold">
           Welcome
        </Box>
    </Typography>
</Box>

<List className={classes.drawer}>
    <listItem button className={classes.ListItem}>
        <HomeIcon/>
        <Box pl={1}  color="inherit">
            Home
        </Box>
    </listItem>

    <listItem button className={classes.ListItem}>
        <PersonIcon/>
        <Box pl={1}  color="inherit">
            About
        </Box>
    </listItem>

    <listItem button className={classes.ListItem}>
        <PersonIcon/>
        <Box pl={1} color="inherit">
            Contact
        </Box>
    </listItem>
</List>

        </Drawer>

        
        </Container>

    );
}

export default Sidebar