import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    image:{
        width: '100%',
    objectFit: 'fill',
    overflowClipMargin: 'contentBox',
    overflow: 'clip',
    height: '300px',
    display: 'block',
   
    }
})

const CardMedia = ({children}) => {
    const classes = useStyles()
  return (
    <div className={classes.image}>{children}</div>
  )
}

export default CardMedia