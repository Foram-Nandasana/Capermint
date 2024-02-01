import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, CardActions, card } from '@material-ui/core';
import data from './Data.json';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  // Paper: {
  //   textAlign: 'center',
  //   alignContent: 'center',
  //   // height: 50,
  //   marginTop: '20px',
  //   padding: '1 ,0.5',
  //   background: 'radial-gradient(circle, rgb(198, 217, 236) 0%, rgb(102, 153, 204) 100%)'
  // },
  title: {
    fontSize: 'clamp(30px, 3vw , 50px)',
  },
  textTitle: {
    fontSize: 'clamp(20px, 1.5vw , 50px)',
  },
  textDes: {
    fontSize: 'clamp(15px, 1vw , 40px)',
  },
  textPrice: {
    fontSize: 'clamp(20px, 1.5vw , 40px)',
  },
  textButton: {
    fontSize: 'clamp(10px, 1.5vw , 30px)',
  },
  card: {
    // maxHeight: '90vh',
    // maxWidth:'90vw', 
    // flexGrow: 1,
    padding: '1 ,0.5',
    marginTop: '20px',
    margin: '30px',
    // display: 'flex',
    flexWrap: 'wrap',
    gap: '1em',
    // flex: '1 0 8rem',
    backgroundColor: '#f1f1f1',
    // background: 'radial-gradient(circle, rgb(198, 217, 236) 0%, rgb(102, 153, 204) 100%)'
  },

}))

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Item = ({ }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const { id } = useParams();
  const ids = Number(id)
  const selectedItem = data.find(item => item.id === ids);

  return (
    <card className={classes.card}>
      {/* // <card sx={{ maxHeight: '90vh',maxWidth:'90vw', flexGrow: 1 }}> */}
      {/* <Paper className={classes.Paper}> */}
      {/* // square
        // elevation={0}
        // sx={{ */}
      {/* //   // display: 'flex',
        //   textAlign: 'center',
        //   alignContent: 'center',
        //   height: 50,
        //   marginTop: '20px',
        //   padding: 0.5,
        //   background: 'radial-gradient(circle, rgb(198, 217, 236) 0%, rgb(102, 153, 204) 100%)'
          
        // }}
      // > */}
      {selectedItem ? (
        <>
          <h2 className={classes.title} style={{ textAlign: 'center' }}>{selectedItem.title}</h2>
        </>
      ) : (
        <p>Data not found</p>
      )}

      {/* </Paper> */}
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
                  width: '100%',
                }}
                src={selectedItem.img[index]}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* <Paper className={classes.Paper}> */}
      {selectedItem ? (
        <>
          <p className={classes.textDes}>{selectedItem.des}</p>
          <h3 className={classes.textPrice}> {selectedItem.price}</h3>
        </>
      ) : (
        <p>Data not found</p>
      )}

      <CardActions>

        {/* <Button variant="outlined" size="medium">Add to Card</Button> */}
        <Button className={classes.textButton} variant="contained">Add to Card</Button>
        <Button className={classes.textButton} variant="contained">Buy Now</Button>

      </CardActions>
      {/* </Paper> */}

    </card>
  );



  // return (


  // <div>
  //   {selectedItem ? (
  //     <>
  //       <h1>{selectedItem.id}</h1>
  //       <h3>{selectedItem.title}</h3>
  //       <img src={selectedItem.img}  height="300"  />
  //       <p>{selectedItem.des}</p>
  //       <h3>{selectedItem.price}</h3>
  //     </>
  //   ) : (
  //     <p>Data not found</p>
  //   )}
  // </div>
  // );

}


