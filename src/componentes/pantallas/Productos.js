import React, { useEffect, useState } from 'react'
import {Container, Typography, Grid, Card, CardMedia, Avatar, Button, CardContent} from "@material-ui/core";
import useStyles from '../../theme/useStyles';
import { getProductos } from '../../actions/ProductoActions';
import { Pagination } from '@material-ui/lab';
import { addItem } from '../../actions/CarritoCompraAction';
import {useStateValue} from '../../context/store';

const Productos = (props) => {
    const [{sesionCarritoCompra}, dispatch] = useStateValue();

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    const [ paginadorProductos, setPaginadorProductos ] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0, 
        data: []
    });

    const handleChange = (event, value) =>{
      setRequestProductos((prev) => ({
        ...prev,
        pageIndex: value
      }));  
    };

    useEffect(() => {
        const getListaProductos = async () => {
            const response = await getProductos(requestProductos);
            console.log(response);
            setPaginadorProductos(response.data);
        };

        getListaProductos();
    }, [requestProductos]);

    const verProducto = async (item) =>{
        // await addItem(sesionCarritoCompra, item, dispatch);
        props.history.push("/detalleProducto/" + item.id);
    }
    

    const classes = useStyles();

    if(!paginadorProductos.data){
        return null;
    };

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { paginadorProductos.data.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia className={classes.media} title="Mi Producto" image= {data.imagen ? data.imagen : "https://majasportswear.com/wp-content/uploads/2020/12/C-CO1-3_camisa-outdoor-signature-gris_maja-sportswear-frente.jpg"} >
                            <Avatar className={classes.price} variant="square">
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography className={classes.text_card} variant='h6'>
                                {data.nombre}
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth onClick={() => verProducto(data)}>
                                Mas Detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination count={paginadorProductos.pageCount} pageIndex={paginadorProductos.pageIndex} onChange={handleChange}/>
        </Container>
    );
};

export default Productos;
