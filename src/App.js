import React, { useEffect, useState } from 'react';
import Login from './componentes/seguridad/Login';
import { Snackbar, ThemeProvider } from '@material-ui/core';
import theme from './theme/theme'
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './componentes/pantallas/Productos';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import CarritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';
import OrdenCompra from './componentes/pantallas/OrdenCompra';
import Perfil from './componentes/seguridad/Perfil';
import Usuarios from './componentes/pantallas/admin/Usuarios';
import EditarUsuarios from './componentes/pantallas/admin/EditarUsuario';
import ListaProductos from './componentes/pantallas/admin/ListaProductos';
import AgregarProductos from './componentes/pantallas/admin/AgregarProducto';
import EditarProducto from './componentes/pantallas/admin/EditarProducto';
import ListaPedidos from './componentes/pantallas/admin/ListaPedidos';
import { getUsuario } from './actions/UsuarioAction';
import { getCarritoCompra } from './actions/CarritoCompraAction';
import { useStateValue } from './context/store';
import { v4 as uuid } from 'uuid';

function App() {
  const [servidorRespuesta, setServidorRespuesta] = useState(false);

  const [ {sesionUsuario, openSnackBar}, dispatch ] = useStateValue();
  
  useEffect( async () => {
      let carritoCompraId = window.localStorage.getItem('carrito');

      if(!carritoCompraId){
        carritoCompraId = uuid();
        window.localStorage.setItem('carrito', carritoCompraId);
      }

    if(!servidorRespuesta){
      await getUsuario(dispatch);
      await getCarritoCompra(dispatch, carritoCompraId);

      setServidorRespuesta(true);
    }
  }, [servidorRespuesta]);

  return (
   <ThemeProvider theme={theme} className="App">
    <Snackbar
    anchorOrigin={{vertical: "bottom", horizontal: "center"}}
    open={openSnackBar ? openSnackBar.open : false}
    autoHideDuration={3000}
    ContentProps={{"aria-describedby": "message-id"}}
    message={
      <span id='message-id'>
        {openSnackBar ? openSnackBar.mensaje : ""}
      </span>
    }
    onClose={ () => 
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: false,
          mensaje: ""
        }
      })
    }
    >

    </Snackbar>
      <Router>
      <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registrar" component={RegistrarUsuario}/>
          <Route exact path="/" component={Productos}/>
          <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
          <Route exact path="/carrito" component={CarritoCompras}/>
          <Route exact path="/procesoCompra" component={ProcesoCompra}/>
          <Route exact path="/ordenCompra/:id" component={OrdenCompra}/>
          <Route exact path="/perfil" component={Perfil}/>
          <Route exact path="/admin/usuarios" component={Usuarios}/>
          <Route exact path="/admin/usuario/:id" component={EditarUsuarios}/>
          <Route exact path="/admin/listaProductos" component={ListaProductos}/>
          <Route exact path="/admin/agregarProducto" component={AgregarProductos}/>
          <Route exact path="/admin/editarProducto/:id" component={EditarProducto}/>
          <Route exact path="/admin/listaPedidos" component={ListaPedidos}/>
        </Switch>
      </Router>
   </ThemeProvider>
  );
}

export default App;
