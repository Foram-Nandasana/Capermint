import { makeStyles } from '@material-ui/core'
import React from 'react'
// import './Font.css';

const useStyles = makeStyles({
    title: {
      fontSize: 'clamp(20px, 2vw , 30px)',
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
      fontWeight:700
    },
    price: {
      fontSize: 'clamp(10px, 1.5vw , 20px)',
      lineHeight: "2",
      letterSpacing: "0.00735em",
      fontWeight:500
    },
  
    description:{

      fontSize: 'clamp(10px, 1.5vw , 20px)',
      lineHeight: "1.5",
      letterSpacing: "0.00735em",
      fontWeight:300
    },
})
const Typo = ({ children, variant }) => {

const classes = useStyles()
    return (
      // <div className={classes.title}>{children}</div>
    <p className={variant === "title" ? classes.title : variant === "price" ? classes.price: classes.description} >{children}</p>
  )
}

export default Typo