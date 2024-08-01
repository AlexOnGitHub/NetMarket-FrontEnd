import React from 'react'
import {Container, Typography, Grid, Button, Divider, TableContainer, TableBody, TableRow, Table, TableCell, CardMedia, Paper} from "@material-ui/core";
import useStyles from '../../theme/useStyles';

const OrdenCompra = (props) => {
    const {id} = props.match.params;
    const classes = useStyles();
    const mensajeEnvio = "No entregado";
    const mensajePago = "Pagado en 2024-04-24";

    return (
        <Container className={classes.containermt}>
            <Typography variant='h5' className={classes.text_title}>
                ORDEN DE COMPRA: {id.toUpperCase()}
            </Typography>
            <Grid container spacing={2}className={classes.papperPadding}>
                    <Grid item md={8} xs={12} >
                        <Typography variant='h6' className={classes.text_title}>
                            ENVIO
                        </Typography>
                        <Typography variant='body2' className={classes.text_envio}>
                            Nombres: César Alejandro Cumplido García
                        </Typography>
                        <Typography variant='body2' className={classes.text_envio}>
                            Email: ce_sa_r4@hotmail.com
                        </Typography>
                        <Typography variant='body2' className={classes.text_envio}>
                            Direccion: 17 de Mayo, #123, San Luis, 34224.
                        </Typography>
                        <div className={classes.alertNotDelivered}>
                            <Typography variant='body2' className={classes.text_title}>
                                {mensajeEnvio}
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <Typography variant='h6' className={classes.text_title}>
                            METODO DE PAGO
                        </Typography>
                        <Typography>
                            Metodo: PayPal
                        </Typography>
                        <div className={classes.alertDelivered}>
                            <Typography variant='body2' className={classes.text_title}>
                                {mensajePago}
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <Typography variant='h6' className={classes.text_title}>
                            PRODUCTOS
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia 
                                            className={classes.imgProductoPC}
                                            image= "https://majasportswear.com/wp-content/uploads/2020/12/C-CO1-3_camisa-outdoor-signature-gris_maja-sportswear-frente.jpg"
                                            title="imagen en proceso compra"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                Abrigo Gucci 2020
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                2 x $2,500.00 = $5,000.00
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>      
                    <Grid item md={4} xs={12}>
                        <TableContainer component={Paper} square>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className={classes.text_title} variant='h6'>RESUMEN DEL PEDIDO</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>Productos</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_title}>2</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>Envio</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_title}>$10.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>Impuesto</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_title}>$300.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>Total</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_title}>$5,310.00</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            {/* Boton para usuario */}
                                            {/* <Button variant='contained' color='primary' size='large' fullWidth className={classes.gridmb}>
                                                PayPal
                                            </Button>
                                            <Button variant='contained' size='large' fullWidth>
                                                Tarjeta de Credito o Debito
                                            </Button> */}
                                            {/* Boton para admin */}
                                            <Button variant='contained' color='primary' size='large' fullWidth>
                                                MARCAR COMO ENTREGADO
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>              
            </Grid>
        </Container>
    );
};

export default OrdenCompra;
