import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Font.css';
import { useNavigate } from 'react-router-dom'
import Typo from './component/Typo';
import Card from './component/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../store/slices/productSlice';
import * as React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { Loader } from './component/Loader';

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

export const Product = () => {


    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])


    const fetchData = () => {
        axios.get("https://65c4a496dae2304e92e301ac.mockapi.io/p/Product")
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
console.log(product,"product")
    useEffect(() => {
        fetchData();
    }, []);

    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();

    const addCard = (value) => {
        console.log(value, "product");
        dispatch(addToCard(value));
    };

    const handleCard = (data) => {
        navigate(`/Product/${data}`);
    }

    return (<>
        {loading ? <Loader /> : (
        <div className={classes.mainContain}>
            <div className='ObjectSansRegular' >
                <h2 className={classes.title} >Products</h2>
{/* <Loader/> */}
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
                            </div>
                            <div className={classes.cardArea}>
                                <Typo variant="price">
                                    ₹ {result.price}
                                </Typo>
                                <Button className={classes.textButton} variant="outlined" size="small" onClick={() => addCard(result)}>Add to Card</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
        )}</>
    )
}
