import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({

    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '25vw',
        '&:hover': {
            boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)',
        },
        '@media only screen and (max-width: 900px)': {
            flexGrow: 0,
            maxWidth: '50%',
            flexBasis: '48%',
        },
        '@media only screen and (max-width: 600px)': {
            flexGrow: 0,
            maxWidth: '100%',
            flexBasis: '100%',
        },
    },
    singleCard: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '70vw',
        height: '100vh',
    },

    addCard: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '70vw',
        height: '25%',
        padding: '20px 20px 40px',
        '@media only screen and (max-width: 740px)': {
            flexGrow: 0,
            maxWidth: '100%',
            flexBasis: '50%',
            height: '60%',
        }
    },

    buyNowCard: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '70vw',
        height: '60%',
        padding: '20px 20px 40px',
        '@media only screen and (max-width: 740px)': {
            flexGrow: 0,
            maxWidth: '100%',
            flexBasis: '50%',
            // height: '60%',
        }
    }
})

const Card = ({ children, variant }) => {
    const classes = useStyles()
    return (
        <p className={variant === "card" ? classes.card : variant === "addCard" ? classes.addCard : variant === "buyNowCard"? classes.buyNowCard : classes.singleCard} >{children}</p>
    )
}
export default Card