import sesionUsuarioReducer from "./sesionUsuarioReducer";
import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer";
import openSnackBarReducer from "./openSnackBarReducer";

export const mainReducer = ( {sesionUsuario, sesionCarritoCompra, openSnackBar}, action ) => {
    return {
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        sesionCarritoCompra: sesionCarritoCompraReducer(sesionCarritoCompra, action),
        openSnackBar: openSnackBarReducer(openSnackBar, action)
    }
};