// import React from 'react'
import Data from './Data.json'
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Font.css';
import { useNavigate } from 'react-router-dom'
import Typo from './component/Typo';
import Card from './component/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../store/slices/productSlice';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const useStyles = makeStyles(() => ({
    mainContain: {
        height: '100vh',
        overflowY: 'scroll',
        padding: '20px',
    },
    cardArea: {
        display: 'grid',
        columnGap: '15px',
        gridTemplateColumns: 'auto auto',
        padding: '20px',
        fontSize: '30px',
    },
    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
    },
    card: {
        flex: '1 0 8rem',
    },
    title: {
        fontSize: 'clamp(30px, 4vw , 50px)',
    },
    textButton: {
        fontSize: 'clamp(8px, 1vw , 25px)',
    },
    CardMedia: {
        objectFit: "fill",
        height: "200px",
        width: "100%",
        display: "block",
        backgroundSize: "cover",
        verticalAlign: "middle",
    },
    button: {
        backgroundColor: '#297ce2',
        color: 'white',
        alignItems: 'center',
        padding: '8px 10px',
        border: 'none',
        width: '100px',
        fontSize: 'clamp(8px, 1.2vw , 25px)',
    },
    container1: {
        flexWrap: 'wrap',
        padding: '16px',
        backgroundColor: '#f1f1f1',
        width: '50vw'
      },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Product = () => {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();


    const addCard = (value) => {
        console.log(value, "product");
        dispatch(addToCard(value));
    };

    const handleForm = () => {
        navigate(`/ProductForm`)
    }

    const handleCard = (data) => {
        navigate(`/Product/${data}`);
    }

    return (
        <div className={classes.mainContain}>
            <div className='ObjectSansRegular' >
                <h2 className={classes.title} >Products</h2>
                {/* <button className={classes.button} onClick={() => handleForm()}>Add Product</button> */}

                <React.Fragment>
                    <button className={classes.button} onClick={handleClickOpen}>Add Product</button>
                    {/* <Button variant="outlined" onClick={handleClickOpen}>
                        Slide in alert dialog
                    </Button> */}
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <form>
                            <div className={classes.container1}>
                                <label for="pname"><b>Product Name</b></label>
                                <input type="text"
                                placeholder="Enter Product Name"
                                    name="pname"
                                    required
                                />
                                <label for="description"><b>Product Description</b></label>
                                <input type="text"
                                placeholder="Enter Product Description"
                                    name="description"
                                    required
                                />
                                <label for="price"><b>Product Price</b></label>
                                <input type="text"
                                placeholder="Enter Product Price"
                                    name="price"
                                    required
                                />
                            </div>
                        </form>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose}>Agree</Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>

                <div className={classes.Container}>
                    {Data.map((result, index) => (
                        <Card variant="card" className={classes.card} key={index} >
                            <div onClick={() => handleCard(result.id)}>
                                <img src={result.img[0]} alt="abc" className={classes.CardMedia} />
                                <Typo variant="title" >
                                    {result.title}
                                </Typo>
                                <Typo variant=" description">
                                    {result.des}
                                </Typo>
                            </div>
                            <div className={classes.cardArea}>
                                <Typo variant="price">
                                    {result.price}
                                </Typo>
                                <Button className={classes.textButton} variant="outlined" size="small" onClick={() => addCard(result)}>Add to Card</Button>
                            </div>
                        </Card>
                    ))}
                </div>


            </div>



        </div>
    )
}
