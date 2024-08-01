import React from 'react';
import useStyles from '../../theme/useStyles';
import {Container, Typography, Grid, Paper, CardMedia, Button, TableContainer, Table, TableBody, TableRow, TableCell, IconButton, Icon, Divider} from "@material-ui/core";
import { useStateValue } from '../../context/store';

const CarritoCompras = (props) => {
    const [{sesionCarritoCompra}, dispatch] = useStateValue();

    console.log("Sesion carrito compra: ", sesionCarritoCompra);

    const miArray = sesionCarritoCompra ? sesionCarritoCompra.items : [];
    
    let suma = 0;
    miArray.forEach(prod => {
        suma += prod.precio
    });

    const realizarCompra = () => {
        props.history.push("/procesoCompra");
    };
    
    const classes = useStyles();

    return(
        <Container classes={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                CARRITO DE COMPRAS
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {miArray.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <CardMedia 
                                            className={classes.imgProductoCC}
                                            image={item.imagen ? item.imagen : 'https://majasportswear.com/wp-content/uploads/2020/12/C-CO1-3_camisa-outdoor-signature-gris_maja-sportswear-frente.jpg'}
                                            title={item.producto}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}> 
                                                {item.producto}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}> 
                                                ${item.precio}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}> 
                                                {item.cantidad}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Paper variant='outlined' square className={classes.papperPadding}>
                        <Typography variant='h6' className={classes.text_title}>
                            SUBTOTAL ({miArray.length}) PRODUCTOS
                        </Typography>
                        <Typography className={classes.text_title}>
                            $143.46
                        </Typography>
                        <Divider className={classes.gridmb}/>
                        <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={realizarCompra}
                        >
                            REALIZAR COMPRA
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarritoCompras;