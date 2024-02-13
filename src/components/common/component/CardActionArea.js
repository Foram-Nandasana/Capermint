import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  action1: {
    padding: '2px 16px',
  },
  action2: {
    display: 'grid',
    columnGap: '50px',
    gridTemplateColumns: 'auto auto',
    padding: '20px',
    fontSize: '30px',
  }
})

const CardActionArea = ({ children, variant }) => {
  const classes = useStyles()
  return (
    <div className={variant === "action1" ? classes.action1 : classes.action2}>{children}</div>
  )
}

export default CardActionArea