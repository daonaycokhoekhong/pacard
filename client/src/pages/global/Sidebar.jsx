import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const name = JSON.parse(window.localStorage.getItem('user')).username;
  const mail = JSON.parse(window.localStorage.getItem('user')).email;
  const avatar = JSON.parse(window.localStorage.getItem('user')).avatar;

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img
                  alt=""
                  width="36px"
                  height="36px"
                  src={`../../assets/logo1.svg`}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
                <Typography variant="h3" color={colors.grey[100]}>
                  MEMOCARD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={avatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {name}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {mail}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Kết quả học tập"
              to="/"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Tài nguyên
            </Typography>
            <Item
              title="Học thẻ mới"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/*<Item*/}
            {/*  title="Quản lý bộ thẻ"*/}
            {/*  to="/contacts"*/}
            {/*  icon={<ContactsOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            <Item
              title="Thư viện"
              to="/library"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Ứng dụng
            </Typography>
            <Item
              title="Ôn tập"
              to="/practice"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lịch"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Thông tin"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  color={colors.grey[300]}*/}
            {/*  sx={{ m: "15px 0 5px 20px" }}*/}
            {/*>*/}
            {/*  Kết quả học tập*/}
            {/*</Typography>*/}
            {/*<Item*/}
            {/*  title="Bar Chart"*/}
            {/*  to="/bar"*/}
            {/*  icon={<BarChartOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Pie Chart"*/}
            {/*  to="/pie"*/}
            {/*  icon={<PieChartOutlineOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Line Chart"*/}
            {/*  to="/line"*/}
            {/*  icon={<TimelineOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Geography Chart"*/}
            {/*  to="/geography"*/}
            {/*  icon={<MapOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
