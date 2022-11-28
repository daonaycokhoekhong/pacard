import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";


import { useContext, useEffect } from "react";
import { SetContext } from "../../context/setContext/SetContext";
import {getAllSetsPublic} from "../../context/setContext/apiCalls";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import {alpha, styled} from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Library = () => {

  // get sets data
  const { sets, dispatch } = useContext(SetContext);
  useEffect(() => {
    getAllSetsPublic(dispatch);
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const theme = useTheme();

  const [openDetail, setOpenDetail] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };
  // const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Tên bộ thẻ",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "desc",
      headerName: "Mô tả",
      flex: 1,
    },
    {
      field: "classify",
      headerName: "Chủ đề",
      flex: 0.5,
    },
    {
      field: "uploadBy",
      headerName: "Tác giả",
      flex: 0.4,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[400]}>
          {params.row.uploadBy}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            size="small"
            disableElevation
            onClick={handleClick}
            startIcon={<SettingsIcon />}
            > Thao tác
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            // anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {/*<MenuItem disableRipple>*/}
            {/*  <EditIcon />*/}
            {/*    Sửa*/}
            {/*  <UpdateSet dataFromParent= {reData}/>*/}
            {/*</MenuItem>*/}
            <MenuItem onClick={handleClose} disableRipple>
              <ShareIcon />
              Lưu trữ
            </MenuItem>
            <MenuItem onClick={handleClickOpenDetail} disableRipple>
              <MoreHorizIcon />
              Chi tiết
            </MenuItem>
              <Dialog
                fullScreen={fullScreen}
                open={openDetail}
                onClose={handleCloseDetail}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  <InfoIcon sx={{mr: 2}}/>
                  {"Thông tin chi tiết"}
                </DialogTitle>
                <DialogContent>
                  <br/>
                  <Typography variant="h5" component="div">
                    {params.row.title}
                  </Typography>
                  <br/>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    🟠 Chủ đề: {params.row.classify}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    🟢 Người đăng: {params.row.uploadBy}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    🔴 Đánh giá: {params.row.rating.star} ⭐
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    🟤 Trạng thái: {(params.row.shared ? "Công khai" : "Riêng tư")}
                  </Typography>
                  <Typography variant="body2">
                    Mô tả.
                    <br />
                    {params.row.desc}
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseDetail}>
                    Đóng
                  </Button>
                </DialogActions>
              </Dialog>
            <Divider sx={{ my: 0.5 }} />
          </StyledMenu>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="THƯ VIỆN" subtitle="Thư viện lưu trữ những bộ thẻ được chia sẻ bởi người dùng." />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          rows={sets}
          columns={columns}
          getRowId={(e) => e._id}
        />
      </Box>
    </Box>
  );
};

export default Library;
