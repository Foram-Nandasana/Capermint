import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    title: {
      fontSize: 'clamp(20px, 1.5vw , 30px)',
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
      fontWeight:700,
      padding: '0px 30px'
    },
    price: {
      fontSize: 'clamp(15px, 1vw , 20px)',
      lineHeight: "2",
      letterSpacing: "0.00735em",
      fontWeight:500,
      padding: '0px 30px'
    },
    description:{
      fontSize: 'clamp(15px, 1vw , 20px)',
      lineHeight: "1.5",
      letterSpacing: "0.00735em",
      fontWeight:300,
      padding: '0px 30px'
    },
})
const Typo = ({ children, variant }) => {

const classes = useStyles()
    return (
    <p className={variant === "title" ? classes.title : variant === "price" ? classes.price: classes.description} >{children}</p>
  )
}

export default Typo