import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Slide } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EditDialog = ({ open, close, editProductData }) => {

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const id  = editProductData.id;

  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    if (editProductData) {
      setInputData({
        id: editProductData?.id,
        title: editProductData?.title || "",
        company: editProductData?.company || "",
        des: editProductData?.des || "",
        price: editProductData?.price || "",
        img: editProductData?.img || "",
      });
    }
  }, [editProductData]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(id, 'id')
    axios
      .put(`https://65c4a496dae2304e92e301ac.mockapi.io/p/Product/${id}`,
        inputData
      )
      .then((res) => {
        console.log("Data Updated success!");
        window.location.reload()
        navigate("/product");
        close(false);
      });
  };

  const handleDialogClose = () => {
    close(false);
  };
  console.log(editProductData , '----> editProductData')  


  return (
    <React.Fragment>
            
            <Dialog
                open={open}
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
                            value={inputData.title}
                            onChange={(e) => {
                              setInputData({
                                    ...inputData,
                                    title: e.target.value,
                                });
                            }}

                            placeholder="Enter Product Name"
                            required
                        />
                        <label for="des"><b>Product Description</b></label>
                        <input type="text"
                            name="des"
                            value={inputData.description}
                            onChange={(e) => {
                              setInputData({
                                    ...inputData,
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
                            value={inputData.price}
                            onChange={(e) => {
                              setInputData({
                                    ...inputData,
                                    price: e.target.value,
                                });
                            }}
                            required
                        />
                        <label for="img"><b>Product Image</b></label>
                        <input type="text"
                            name="img"
                            placeholder="Enter Product Image"
                            value={inputData.img}
                            onChange={(e) => {
                              setInputData({
                                    ...inputData,
                                    img: [e.target.value],
                                });
                            }}
                            required
                        />
                    </div>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Close</Button>
                        <Button  onClick={handleSubmit}>Update</Button>
                     
                    </DialogActions>
                </form>
                </Dialog>
        </React.Fragment>
  )
}
