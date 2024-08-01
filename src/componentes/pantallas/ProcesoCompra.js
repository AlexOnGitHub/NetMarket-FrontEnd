import React, { useState } from 'react'
import {Container, Typography, Grid, Button, Stepper, StepLabel, Step, TextField, FormControl, RadioGroup, FormControlLabel, FormLabel, Radio, Divider, TableContainer, TableBody, TableRow, Table, TableCell, CardMedia, Paper} from "@material-ui/core";
import useStyles from '../../theme/useStyles';

const ProcesoCompra = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);

    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep +1);
    };

    const retrocederProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep -1);
    };

    const realizarPedido = () => {
        const idCompra = "002a40fc-81d6-4cdd-8382-416953346a09";
        props.history.push("/ordenCompra/" + idCompra)
    };

    return (
        <Container className={classes.containermt}>
           <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envió</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de Pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Envió</StepLabel>
                </Step>
           </Stepper>
           {activeStep === 1 ? (
                <Grid md={6} xs={12} className={classes.gridPC}>
                    <Typography variant='h6' className={classes.text_title}>
                        ENVIO DEL PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField 
                                label="Dirección"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                label="Ciudad"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                label="País"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' color='primary' onClick={continuarProceso}>
                                    CONTINUAR
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
           ) : activeStep === 2 ? (
                <Grid md={3} xs={12} className={classes.gridPC}>
                   <Typography variant='h6' className={classes.text_title}>METODO DE PAGO</Typography>     
                   <Grid contaier spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl}>
                                <FormLabel>
                                    Seleccione Metodo de Pago
                                </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel 
                                    value="PayPal" 
                                    control={<Radio color="primary"/>} 
                                    label="Paypal"/>
                                    <FormControlLabel 
                                    value="Tarjeta" 
                                    control={<Radio color="primary"/>} 
                                    label="Tarjeta Debito/Credito"/>
                                    <FormControlLabel 
                                    value="Efectivo" 
                                    control={<Radio color="primary"/>} 
                                    label="Deposito en Efectivo"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' className={classes.buttonAnterior} onClick={retrocederProceso}>ANTERIOR</Button>
                            <Button variant='contained' color='primary' onClick={continuarProceso}>CONTINUAR</Button>
                        </Grid>
                   </Grid>
                </Grid>
           ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item md={8} xs={12} className={classes.gridLR}>
                        <Typography variant='h6' className={classes.text_title}>
                            ENVIO
                        </Typography>
                        <Typography>
                            Direccion: 17 de Mayo, #123, San Luis, 34224.
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant='h6' className={classes.text_title}>
                            METODO DE PAGO
                        </Typography>
                        <Typography>
                            Metodo: PayPal
                        </Typography>
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
                        <Button 
                        variant='contained'
                        color='primary'
                        onClick={retrocederProceso}
                        >
                            ANTERIOR
                        </Button>
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
                                        <TableCell>
                                            <Button variant='contained' color='primary' size='large' onClick={realizarPedido}>
                                                REALIZAR PEDIDO
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>              
                </Grid>
           ) : null}
        </Container>
    );
};

export default ProcesoCompra;
