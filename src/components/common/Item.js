import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import data from './Data.json';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core/styles';
import Card from './component/Card';

const useStyles = makeStyles(() => ({

  cardArea: {
    display: 'grid',
    columnGap: '15px',
    gridTemplateColumns: 'auto auto',
    padding: '20px',
    fontSize: '30px',
    '@media only screen and (max-width: 550px)': {
     padding: '10px'
    },
  },

  title: {
    fontSize: 'clamp(30px, 3vw , 50px)',
  },
  textTitle: {
    fontSize: 'clamp(20px, 1.5vw , 50px)',
  },
  textDes: {
    fontSize: 'clamp(15px, 1vw , 40px)',
    padding: '0px 30px'
  },
  textPrice: {
    fontSize: 'clamp(20px, 1.5vw , 40px)',
    padding: '0px 30px'
  },
  textButton: {
    fontSize: 'clamp(10px, 1.5vw , 30px)',
  },
  card: {
    padding: '1 ,0.5',
    marginTop: '20px',
    margin: '30px',
    flexWrap: 'wrap',
    gap: '1em',
    backgroundColor: '#f1f1f1',
  },

}))

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Item = ({ }) => {
  const classes = useStyles();
  const theme = useTheme();
  // const [product, setProduct] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const { id } = useParams();
  const ids = Number(id)
  const selectedItem = data.find(item => item.id === ids);
  
  return (
    <Card variant="singleCard" className={classes.card}>

      {selectedItem ? (
        <>
          <h2 className={classes.title} style={{ textAlign: 'center' }}>{selectedItem.title}</h2>
        </>
      ) : (
        <p>Data not found</p>
      )}

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '400px',
                  display: 'block',
                  maxWidth: '90vw',
                  overflow: 'hidden',
                  width: '100vw',
                }}
                src={selectedItem.img[index]}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {selectedItem ? (
        <>
          <p className={classes.textDes}>{selectedItem.des}</p>
          <h3 className={classes.textPrice}> {selectedItem.price}</h3>
        </>
      ) : (
        <p>Data not found</p>
      )}
      <div className={classes.cardArea}>
        <Button className={classes.textButton} variant="contained" >Add to Card</Button>
        <Button className={classes.textButton} variant="contained">Buy Now</Button>
      </div>
    </Card>
  );
}


