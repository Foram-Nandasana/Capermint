import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Data from './Data.json'
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
    },
    card: {
        flex: '1 0 8rem',
    },
    text: {
        alignItems: 'center',
        flex: '1 0 4rem',
    },
    title: {
        fontSize: 'clamp(30px, 4vw , 50px)',
    },
    textTitle: {
        fontSize: 'clamp(20px, 3vw , 50px)',
    },
    textDes: {
        fontSize: 'clamp(15px, 2vw , 40px)',
    },
    textPrice: {
        fontSize: 'clamp(20px, 3vw , 40px)',
    },
    textButton: {
        fontSize: 'clamp(10px, 1.5vw , 30px)',
    },

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
                                <Typography className={classes.textTitle} gutterBottom variant="h5" component="div">
                                    {result.title}
                                </Typography>
                                <Typography className={classes.textDes} variant="body2" color="text.secondary">
                                    {result.des}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography className={classes.textPrice} variant="h6" color="text.secondary">
                                {result.price}
                            </Typography>

                            <Button className={classes.textButton} variant="outlined" size="medium">Add to Card</Button>

                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    )
}
