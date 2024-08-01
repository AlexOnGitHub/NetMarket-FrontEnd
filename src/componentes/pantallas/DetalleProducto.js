import React, { useEffect, useState } from 'react';
import useStyles from '../../theme/useStyles';
import {Container, Typography, Grid, Paper, CardMedia, Button, TableContainer, Table, TableBody, TableRow, TableCell, TextField} from "@material-ui/core";
import {getProducto} from '../../actions/ProductoActions';
import {addItem} from '../../actions/CarritoCompraAction';
import {useStateValue} from '../../context/store';

const DetalleProducto = (props) => {
    const [{sesionCarritoCompra}, dispatch] = useStateValue();

    const [cantidad, setCantidad] = useState(1);
    const [error, setError] = useState(false);

    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        stock: 0,
        marcaId: 0,
        marcaNombre: "",
        categoriaId: 0,
        categoriaNombre: "",
        precio: 0.0,
        imagen: ""
    });

    useEffect(() => {
        const id = props.match.params.id;
        const getProductoAsync = async () => {
            const response = await getProducto(id)
            setProductoSeleccionado(response.data);
        }
        getProductoAsync();
    });

    const handleCantidadChange = (event) => {
        const valor = event.target.value;
    
        if (valor >= 1 && valor <= productoSeleccionado.stock) {
          setCantidad(valor);
          setError(false); 
        } else {
          setError(true); 
        }
      };

    const agregarCarrito = async () => {
        const item = {
            id: productoSeleccionado.id,
            producto: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            imagen: productoSeleccionado.imagen,
            marca: productoSeleccionado.marcaNombre,
            categoria: productoSeleccionado.categoriaNombre
        };

        await addItem(sesionCarritoCompra, item, dispatch);

        props.history.push("/carrito")
    }
    const classes = useStyles();
    
    return(
        <Container classes={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                {productoSeleccionado.nombre}
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper className={classes.paperImg} variant="outlined" square>
                        <CardMedia 
                        className={classes.mediaDetalle}
                        image= {productoSeleccionado.imagen ? productoSeleccionado.imagen : 'https://majasportswear.com/wp-content/uploads/2020/12/C-CO1-3_camisa-outdoor-signature-gris_maja-sportswear-frente.jpg'}
                        title={productoSeleccionado.descripcion}
                        />
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subtitle2'>
                                            Precio
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant='subtitle2'>
                                            {productoSeleccionado.precio}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='subtitle2'>
                                            Cantidad
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField 
                                        id='cantidad-producto'
                                        label=''
                                        type='number'
                                        value={cantidad}
                                        onChange={handleCantidadChange}
                                        defaultValue={1}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        inputProps={{
                                            max: productoSeleccionado.stock
                                        }}
                                        error={error} 
                                        helperText={error ? `La cantidad debe estar entre 1 y ${productoSeleccionado.stock}` : ''}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button
                                        variant='contained'
                                        color='primary'
                                        size='large'
                                        onClick={agregarCarrito}
                                        >
                                            Agregar al Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: ${productoSeleccionado.precio}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades Disponibles: {productoSeleccionado.stock}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: {productoSeleccionado.marcaNombre}
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: {productoSeleccionado.categoriaNombre}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripción:
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                {productoSeleccionado.descripcion}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;