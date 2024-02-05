import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import { makeStyles } from '@material-ui/core';
import Typo from './Typo';
import { removeUser } from '../../../store/slices/productSlice';
const useStyles = makeStyles(() => ({


  mainContainer: {
    display: 'flex',
    // flexWrap: 'wrap',
    // gap: '1em',
    '@media only screen and (max-width: 650px)':{
      flexWrap: 'wrap'

  }
  },
  cardArea: {
    display: 'grid',
    columnGap: '15px',
    gridTemplateColumns: 'auto auto auto',
    padding: '20px',
    fontSize: '30px',
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
    height: "300px",
    width: "300px",
    display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",
    // gridRowStart: 1,
    // gridRowEnd: 3,

    '@media only screen and (max-width: 650px)':{
      height: '100%',
      width: '100%'
  }
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gap: '30px'

  },
  button: {
    backgroundColor: '#297ce2',
    color: 'white',
    alignItems: 'center',
    padding: '8px 10px',
    // margin: '8px 0',
    border: 'none',
    // cursor: 'pointer',
    width: '70px',
    fontSize: 'clamp(8px, 1.2vw , 25px)',
    
},
  // '@media only screen and (max-width: 600px)': {
  //         cardArea:{
  //             columnGap: '10px',
  //             gridTemplateRows: 'auto auto',
  //             gridTemplateColumns: 'none',
  //         },
  //     },
}));


export const AddCart = () => {

  // const data = useSelector((state) => {
  //     return state.product;
  // } )

  const classes = useStyles();
  const data = useSelector((state) => state.product)
  const deleteUser = () =>{}
  console.log(data)

  return (

    
     

      <div className={classes.Container} style={{ paddingTop: '50px'}}>
        {data.map((product, id) => (

          <Card variant="addCard" className={classes.card} key={id} >
            <div className={classes.mainContainer}>
              <img src={product.img[0]} alt="abc" className={classes.CardMedia} />
              <div className={classes.container}>
                <Typo variant="title" >
                  {product.title}
                </Typo>
                <Typo variant=" description">
                  {product.des}
                </Typo>

                <div className={classes.cardArea}>
                            <Typo variant="price">
                                {product.price}
                            </Typo>   
                            <button className={classes.button}   >Buy Now</button>
                            <button className={classes.button} onClick={() => deleteUser()}  >Delete</button>
                        </div>
              </div>

            </div>

          </Card>

        ))}
      </div>

  
   
  )
}
