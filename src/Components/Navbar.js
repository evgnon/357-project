import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Assets/logo.png";
import SearchBar from "material-ui-search-bar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import WalletIcon from '@mui/icons-material/Wallet';
import { NavLink } from 'react-router-dom';
const drawerWidth = 300;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={{ paddingTop: "0px" }}>
        <Toolbar />

        <Typography
          variant="h6"
          fontWeight={"1200px"}
          mx={"25px"}
          color={"#7E7D82"}
        >
          User Panel
        </Typography>
        <List>
          <ListItem
          sx={{
            '.active': {
              background: '#F2FFE8',
              color: '#7CC644',
              '& .MuiListItemIcon-root': {
                color: '#7CC644',
              },
            },
            }}
            >
              <ListItemButton
              component={NavLink}
              to="/dashboard"
              activeClassName="active"
              style={{ borderRadius: "10px" }}
              sx={{ color: "#7E7D82" }}
  >
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItemButton>
</ListItem>
          <ListItem
          sx={{
            '.active': {
              background: '#F2FFE8',
              color: '#7CC644',
              '& .MuiListItemIcon-root': {
                color: '#7CC644',
              },
            },
            }}>
            <ListItemButton
            component={NavLink}
              to="/account"
              activeClassName="active"
              style={{ borderRadius: "10px" }}
              sx={{ color: "#7E7D82" }}
            >
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItemButton>
          </ListItem>
          <ListItem
          sx={{
            '.active': {
              background: '#F2FFE8',
              color: '#7CC644',
              '& .MuiListItemIcon-root': {
                color: '#7CC644',
              },
            },
            }}>
            <ListItemButton
            component={NavLink}
              to="/explore"
              activeClassName="active"
              style={{ borderRadius: "10px" }}
              sx={{ color: "#7E7D82" }}
              
            >
              <ListItemIcon>
                <ExploreIcon/>
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem
          sx={{
            '.active': {
              background: '#F2FFE8',
              color: '#7CC644',
              '& .MuiListItemIcon-root': {
                color: '#7CC644',
              },
            },
            }}>
            <ListItemButton
            component={NavLink}
              to="/notification"
              activeClassName="active"
              style={{ borderRadius: "10px" }}
              sx={{ color: "#7E7D82" }}
            >
              <ListItemIcon>
                <NotificationsIcon/>
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
        }}
      >
        <List>
          <ListItem>
            <ListItemButton style={{ borderRadius: "10px", color: "gray" }} href="/dashboard">
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
              <ListItemText primary="Connect a wallet" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton style={{ borderRadius: "10px", color: "gray" }} href="/">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ root: { borderBottom: "none" }, background: "white" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <div style={{display : "flex",width : "100%"}}>
            <Typography
              ml={"5px"}
              fontSize={"200%"}
              
              color={"black"}
              variant="h1"
              
            >
              Hello Mubashir,
            </Typography>

            <div style={{display : "flex",width : "80%", justifyContent : "flex-end"}}> 
              <SearchBar
                style={{
                  height: "37.6px",
                  background: "rgb(251 251 251)",
                  borderRadius: "5px",
                  marginRight : "15px"
                }}
                placeholder="Search"
              />
            </div>
          </div>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <img src={logo} alt="Not found" style={{ padding: "35px" }} />

          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        color={""}
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "rgb(247 241 241)",
          minHeight: "850px",
        }}
      >
        <Toolbar />

        {props.children}
        {/* <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography> */}
      </Box>
    </Box>
  );
}

export default Navbar;
