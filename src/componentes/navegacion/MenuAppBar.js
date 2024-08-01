import { AppBar, Toolbar, Typography, Container, Icon, IconButton, Drawer, List } from "@material-ui/core";
import {useState, React} from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom"
import MenuCliente from "./desktop/MenuCliente";
import MenuAdmin from "./desktop/MenuAdmin";
import MenuMobile from "./mobile/MenuMobile";
import MenuMobilePublico from "./mobile/MenuMobilePublico";
import MenuPublico from "./desktop/MenuPublico";

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const clases = useStyles();

    const openTogle = () => {
        setOpen(true);
    };

    const closeToggle = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static" className={clases.appBar}>
                <Container>
                    <Toolbar>
                        <div className={clases.sectionMobile}>
                            <IconButton color="inherit" onClick={openTogle}>
                                <Icon fontSize="large">menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer
                        open={open}
                        onClose={closeToggle}
                        >
                            <div className={clases.list}>
                                <List>
                                    {/* <MenuMobilePublico clickHandler={closeToggle} /> */}
                                    <MenuMobile clickHandler={closeToggle}/>
                                </List>
                            </div>
                        </Drawer>
                        <div className={clases.grow}>
                            <Link to="/" color="inherit" className={clases.linkAppBarLogo} underline="none">
                                <Icon fontSize="large" className={clases.mr}>store</Icon>
                                <Typography variant="h5">Alekey Shop</Typography>
                            </Link>
                        </div>
                        <div className={clases.sectionDesktop}>
                            {/* <MenuPublico/> */}
                            <MenuCliente/>
                            <MenuAdmin/>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;