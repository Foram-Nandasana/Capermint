import React from 'react'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container1: {
      flexWrap: 'wrap',
      padding: '16px',
      backgroundColor: '#f1f1f1',
      width: '50vw'
    },
  });

const ProductForm = () => {
    const classes = useStyles();
    return (
        <form>
        <div className={classes.container1}>
            <label for="pname"><b>Product Name</b></label>
            <input type="text"
                name="pname"
                required
            />
            <label for="description"><b>Product Description</b></label>
            <input type="text"
                name="description"
                required
            />
             <label for="price"><b>Product Price</b></label>
            <input type="text"
                name="price"
                required
            />
            <button type="submit"  >Add</button>
        </div>
    </form>
      )
}

export default ProductForm