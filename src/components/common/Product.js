import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Data from './Data.json'
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Font.css';
import {useNavigate} from 'react-router-dom'

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
        fontSize: 'clamp(20px, 2vw , 50px)',
    },
    textDes: {
        fontSize: 'clamp(15px, 1vw , 40px)',
    },
    textPrice: {
        fontSize: 'clamp(20px, 2vw , 40px)',
    },
    textButton: {
        fontSize: 'clamp(10px, 1vw , 30px)',
    },

}));

export const Product = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleCard = (data) => {

       navigate(`/Product/${data}`);
    }

    return (
        
            <div className='ObjectSansRegular'>
                <h2 className={classes.title} >Products</h2>

                <div className={classes.Container}>

                    {Data.map((result, index) => (
                        <Card className={classes.card} onClick={() => handleCard(result.id)} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={result.img}
                                    alt="green iguana"
                                    style={{ borderRadius: "5px" }}
                                />
                                <CardContent>
                                    <div className={classes.textTitle} >
                                        {result.title}
                                    </div>

                                    <div className={classes.textDes}>
                                        {result.des}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div className={classes.textPrice} >
                                    {result.price}
                                </div>

                                <Button className={classes.textButton} variant="outlined" size="medium">Add to Card</Button>

                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
      
    )
}
