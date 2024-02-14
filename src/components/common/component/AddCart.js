import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card';
import { makeStyles } from '@material-ui/core';
import Typo from './Typo';
import { removeUser } from '../../../store/slices/productSlice';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    '@media only screen and (max-width: 740px)': {
      flexWrap: 'wrap',
      display: 'grid',
      gridTemplateRows: '200px 200px '
    }
  },
  containerCard: {
    height: '100vh',
    overflowY: 'scroll',
    padding: '20px',
  },
  cardArea: {
    display: 'grid',
    columnGap: '15px',
    gridTemplateColumns: 'auto auto ',
    fontSize: '30px',
    '@media only screen and (max-width: 780px)': {
      gridTemplateColumns: '90px auto ',
      padding: '5px',
      columnGap: '15px'
    }, '@media only screen and (max-width: 730px)': {
      gridTemplateColumns: 'auto auto ',
      padding: '15px',
      columnGap: '15px'
    },
    '@media only screen and (max-width: 650px)': {
      gridTemplateColumns: '70px auto ',
      padding: '15px',
      columnGap: '10px'
    }
  },
  card: {
    flex: '1 0 10rem',
  },
  title: {
    fontSize: 'clamp(30px, 4vw , 50px)',
  },
  textButton: {
    fontSize: 'clamp(8px, 1vw , 25px)',
  },
  CardMedia: {
    objectFit: "cover",
    height: "180px",
    width: "150px",
    display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",
    '@media only screen and (max-width: 740px)': {
      height: '100%',
      width: '100%',
      objectFit: "contain"
    }
  },
  container: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto ',
    padding: '0px 20px',
    '@media only screen and (max-width: 740px)': {
      gridTemplateRows: '40px 50px 50px ',
    }
  },
  button: {
    backgroundColor: '#297ce2',
    color: 'white',
    alignItems: 'center',
    padding: '8px 10px',
    border: 'none',
    width: '70px',
    fontSize: 'clamp(8px, 1.2vw , 25px)',
  },
  counterContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    display:'grid',
    gridTemplateColumns: 'auto auto auto',
    alignItems: 'center',
    marginTop: '10px',
  },
  counterButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  counterButton: {
    // backgroundColor: '#297ce2',
    color: 'black',
    height: '20px',
    width: '20px',
    padding: '8px 12px',
    margin: '0 5px',
    fontSize: 'clamp(8px, 3vw , 20px)',
  },
  counterValue: {
    fontSize: 'clamp(14px, 2vw, 25px)',
  },
}));


export const AddCart = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const data = useSelector((state) => state.product);
  // const [counter, setCounter] = useState( data.map (product => ({...product, qty:1})));
  // console.log(data, 'hyyy')
  const [qty, setQty] = useState({});
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const BuyNow = (value) => {
    // console.log(value, "Buy");
    // dispatch(buyNow(value));
    navigate(`/BuyNow/${value.id}`);
}

  const handleIncrement = (id) => {
    setQty(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1
    }));
  };

  const handleDecrement = (id) => {
    if (qty[id] > 1) {
      setQty(prevState => ({
        ...prevState,
        [id]: prevState[id] - 1
      }));
    }
  };

  return (
    <div className={classes.containerCard}>
      {data.map((product, id) => (
        <Card variant="addCard" className={classes.card} key={id} >
          <div className={classes.mainContainer}>
            <img src={product.img[0]} alt="abc" className={classes.CardMedia} />
            <div className={classes.container} >
              <Typo variant="title" >
                {product.title}
              </Typo>
              <Typo variant=" description">
                {product.des}
              </Typo>
              <div className={classes.cardArea}>
                <Typo variant="price">
                ₹{product.price * (qty[product.id] || 1)}
                  {/* {product.price} */}
                </Typo>
                <div className={classes.counterContainer}>
              <div className={classes.counterButtons}>

                <FaMinus className={classes.counterButton} onClick={() => handleDecrement(product.id)} />
                <div className={classes.counterValue}>{qty[product.id] || 1}</div>
                <FaPlus className={classes.counterButton} onClick={() => handleIncrement(product.id)} />

              </div>
            </div>
            {/* <BuyNow /> */}
    
                <button className={classes.button} onClick={() => BuyNow(product)} >Buy Now</button>
                <button className={classes.button} onClick={() => deleteUser(id)}  >Delete</button>
              </div>
              
            </div>
            
          </div>
        </Card>
      ))}
     
    </div>
  )
}
