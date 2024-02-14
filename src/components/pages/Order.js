import React from 'react'
import Card from '../common/component/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    mainContain: {
        height: '100vh',
        overflowY: 'scroll',
        padding: '20px',
    },
    containerCard: {
        height: '100vh',
        overflowY: 'scroll',
        padding: '20px',
      },
    card: {
        flex: '1 0 8rem',
    },
    title: {
        fontSize: 'clamp(20px, 1.5vw , 30px)',
        lineHeight: "1.235",
        letterSpacing: "0.00735em",
        fontWeight: 200,
        padding: '0px 10px',
        display: 'grid',
        columnGap: '10px',
        gridTemplateColumns: 'auto auto',
        alignItems: 'center',
        gridTemplateRows: '30px 30px 30px 30px 30px'
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
}));


export const Order = () => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);
    const fetchData = () => {
        axios.get("https://65c4a496dae2304e92e301ac.mockapi.io/p/BuyNow")
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
    console.log(product, "product")
    useEffect(() => {
        fetchData();
    }, []);

    const handleCancle = (id) => {
        axios.delete(`https://65c4a496dae2304e92e301ac.mockapi.io/p/BuyNow/${id}`)
            .then((response) => {
                // console.log(response);
                alert("Cancle Order")
                window.location.reload()
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };
    return (

        <div className={classes.containerCard}>
            {product.map((result, index) => (
                <Card variant="buyNowCard" className={classes.card}>
                    <img src={result.img && result.img[0]} alt="abc" className={classes.CardMedia} />
                    <div className={classes.title}>
                        <h5>Product Name</h5>
                        {result.name}
                        <h5>Price</h5>
                        {result.price}
                        <h5>Delived by</h5>
                        {result.deliveredDate}
                    </div>
                    <button className={classes.button} onClick={() => handleCancle(result.id)}>Cancle Order</button>
                </Card>
            ))}</div>
    )
}
