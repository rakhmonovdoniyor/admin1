import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate } from "react-router-dom";
import { IconLeft } from "../style";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to="/motor" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <IconLeft>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={img1}
                  alt=""
                />
                Motor
              </IconLeft>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/caravan" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <IconLeft>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={img2}
                  alt=""
                />
                Caravan
              </IconLeft>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/tuning" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <IconLeft>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={img3}
                  alt=""
                />
                Tuning
              </IconLeft>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/used-car" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <IconLeft>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={img4}
                  alt=""
                />
                Used Car
              </IconLeft>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          to="/camping-place"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem>
            <ListItemButton>
              <IconLeft>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={img5}
                  alt=""
                />
                Camping Place
              </IconLeft>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <div>
              <ListItemButton>
                <IconLeft>
                  <button className="button-24" onClick={handleLogOut}>
                    <LogoutIcon>Log Out</LogoutIcon>
                  </button>
                </IconLeft>
              </ListItemButton>
            </div>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ListIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
