import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import Data from './Data.json'
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
    },
    card:{
        flex: '1 0 8rem',
    },
    text:{
        alignItems:'center',
        flex:'1 0 4rem'
    },
    title:{
        fontSize: 'clamp(20px, 2vw , 50px)'
    },
    // textTitle:{
    //     fontSize: 'clamp(20px, 3vw , 50px)'
    // }

}));

export const Product = () => {

    const classes = useStyles();


    return (
        <>
        <h2 className={classes.title}>Products</h2>
          
            <div className={classes.Container}>
            
            {Data.map((result, index) => (
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={result.img}
                            alt="green iguana"
                            style={{ borderRadius: "5px" }}
                        />
                         <CardContent>
                                        <Typography   gutterBottom variant="h5" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography  variant="body2" color="text.secondary">
                                            {result.des}
                                        </Typography>
                                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                                    <Typography  variant="h6" color="text.secondary">
                                        {result.price}
                                    </Typography>
                                   
                                    <Button  variant="outlined" size="medium">Add to Card</Button>
                                   
                                </CardActions>
                </Card>
                ))}
            </div>
            {/* <Container maxWidth="lg" style={{alignItems:"center"}}>
           
                <Typography variant='h3' align='center'>
                    Products
                </Typography>

                <Grid container spacing={5} align = 'center'>
                    {Data.map((result, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={result.img}
                                        alt="green iguana"
                                        style={{ borderRadius: "5px" }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.des}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Typography variant="h6" color="text.secondary">
                                        {result.price}
                                    </Typography>
                                   
                                    <Button variant="outlined" size="medium">Add to Card</Button>
                                   
                                </CardActions>
                            </Card>

                        </Grid>
                    ))}

                </Grid>
            </Container> */}
        </>
    )
}
