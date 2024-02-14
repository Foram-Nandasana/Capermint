import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
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
        width: '30vw'
    },
}));


export const FormDialog = () => {
  
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();
    const [formData, setFormData] = useState({
        title: '',
        des: '',
        price: '',
        img: '',
    });
    const [product, setProduct] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleAddProduct = () => {
        axios.post("https://65c4a496dae2304e92e301ac.mockapi.io/p/Product", formData)
            .then((response) => {
                console.log(response.data);
                window.location.reload()
                fetchData(); // Fetch updated data after adding a new product
                handleClose();
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    const fetchData = () => {
        axios.get("https://65c4a496dae2304e92e301ac.mockapi.io/p/Product")
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <React.Fragment>
           
            <button className={classes.button} onClick={handleClickOpen}>Add Product</button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <form >
                    <DialogTitle id="responsive-dialog-title">
                        Add Product
                    </DialogTitle>
                    <div className={classes.container1}>
                        <label for="title"><b>Product Name</b></label>
                        <input type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                });
                            }}

                            placeholder="Enter Product Name"
                            required
                        />
                        <label for="des"><b>Product Description</b></label>
                        <input type="text"
                            name="des"
                            value={formData.description}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    des: e.target.value,
                                });
                            }}
                            placeholder="Enter Product Description"
                            required
                        />
                        <label for="price"><b>Product Price</b></label>
                        <input type="text"
                            placeholder="Enter Product Price"
                            name="price"
                            value={formData.price}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    price: e.target.value,
                                });
                            }}
                            required
                        />
                        <label for="img"><b>Product Image</b></label>
                        <input type="text"
                            name="img"
                            placeholder="Enter Product Image"
                            value={formData.img}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    img: [e.target.value],
                                });
                            }}
                            required
                        />
                    </div>
                    <DialogActions>
                        <Button onClick={handleAddProduct}>Add</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </form>

            </Dialog>
        </React.Fragment>
    );

}
