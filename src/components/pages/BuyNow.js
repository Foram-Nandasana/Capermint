import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from '../common/component/Card';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  mainContain: {
    height: '100vh',
    // overflowY: 'scroll',
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

export const BuyNow = ({ }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [DelivedDate, setDelivedDate] = useState(null);
  const [textarea, setTextarea] = useState();
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const cartData = useSelector((state) => state.product);
  const selectedQty = cartData.find(item => item.id === id);


  useEffect(() => {
    axios
      .get(`https://65c4a496dae2304e92e301ac.mockapi.io/p/Product/${id}`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const sevenDaysLater = new Date(currentDate);
    sevenDaysLater.setDate(currentDate.getDate() + 7);
    const formattedDate = sevenDaysLater.toLocaleDateString();
    setDelivedDate(formattedDate);
  }, []);

  const buyNow = {
    name: value.title,
    price:(value.price) * (selectedQty.quantity || 1),
    img: value.img,
    quantity: selectedQty.quantity,
    deliveredDate: DelivedDate,
    address: '',
  };
  // console.log(cartData.title, "qtyyy")
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  const handleBuyNow = () => {

    const updatedBuyNow = {
      ...buyNow,
      address: textarea,
    };

    // console.log(buyNow, 'buyNow')
    // console.log(textarea, 'text')
    console.log(updatedBuyNow, 'Buy Now Data')
    axios.post("https://65c4a496dae2304e92e301ac.mockapi.io/p/BuyNow", updatedBuyNow)
        .then((response) => {
            console.log(response.data);
            window.location.reload()
        })
        .catch((error) => {
            console.error('Error adding product:', error);
        });
        navigate("/Order");
  }

  return (
    <>
      <div className={classes.mainContain}>
        {selectedQty ? (
          <Card variant="buyNowCard" key={id} >
            <img src={value.img && value.img[0]} alt="abc" className={classes.CardMedia} />
            <div className={classes.title}>
              <h5>Name</h5>
              {value.title}
              <h5>Price</h5>
              {value.price * (selectedQty.quantity || 1)}
              {/* {value.price} */}
              <h5>Quentity</h5>
              {selectedQty.quantity}
              <h5>Address</h5>
              <form>
                <textarea value={textarea} onChange={handleChange} />
              </form>
              <h5>Delived by</h5>
              {DelivedDate}
            </div>
            {/* <button type='submit' className={classes.button} onClick={() => handleBuyNow(value)}>Buy Now</button> */}
            <button type='submit' className={classes.button} onClick={handleBuyNow}>Buy Now</button>
          </Card>
        ) : (
          <p>Data not found</p>

        )}
      </div>

    </>
  )
}
