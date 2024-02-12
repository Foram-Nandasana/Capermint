import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typo from '../common/component/Typo';
import Card from '../common/component/Card';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FormDialog } from '../common/component/FormDialog';
import * as React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { EditDialog } from '../common/component/EditDialog';

const useStyles = makeStyles(() => ({
  mainContain: {
    height: '100vh',
    overflowY: 'scroll',
    padding: '20px',
  },
  cardArea: {
    display: 'grid',
    columnGap: '15px',
    gridTemplateColumns: 'auto auto',
    padding: '20px',
    fontSize: '30px',
  },
  Container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1em',
  },
  card: {
    flex: '1 0 8rem',
  },
  title: {
    fontSize: 'clamp(30px, 4vw , 50px)',
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
  container1: {
    flexWrap: 'wrap',
    padding: '16px',
    backgroundColor: '#f1f1f1',
    width: '50vw'
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Admin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [editProductData, setEditProductData] = useState(null);

  const handleCard = (data) => {
    navigate(`/Product/${data}`);
  }
  // handle edit dialog
  const handleEditDialog = (value) => {
    setEditProductData(value);
    setIsEditDialogOpen(true);
  };
  const handleDelete = (id) => {
    axios.delete(`https://65c4a496dae2304e92e301ac.mockapi.io/p/Product/${id}`)
      .then((response) => {
        console.log(response);
        // Update the product list after deletion
        setProduct((prevProducts) => prevProducts.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  useEffect(() => {
    axios
      .get("https://65c4a496dae2304e92e301ac.mockapi.io/p/Product")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.mainContain}>
      <div className='ObjectSansRegular' >
        <h2 className={classes.title} >Products</h2>
        <FormDialog />

        <div className={classes.Container}>
          {product.map((result, index) => (
            <Card variant="card" className={classes.card} key={index} >
              <div onClick={() => handleCard(result.id)}>
                <img src={result.img[0]} alt="abc" className={classes.CardMedia} />
                <Typo variant="title" >
                  {result.title}
                </Typo>
                <Typo variant=" description">
                  {result.des}
                </Typo>
                <Typo variant="price">
                  ₹ {result.price}
                </Typo>
              </div>
              <div className={classes.cardArea}>

                <Button className={classes.textButton} variant="outlined" size="small" onClick={() => handleEditDialog(result)}>Edit</Button>
                <Button className={classes.textButton} variant="outlined" size="small" onClick={() => handleDelete(result.id)} >Delete</Button>
              </div>
            </Card>
          ))}
          {isEditDialogOpen && (
            <EditDialog
              open={isEditDialogOpen}
              close={setIsEditDialogOpen}
              editProductData={editProductData}
            />
          )}

        </div>
      </div>
    </div>
  )
}
