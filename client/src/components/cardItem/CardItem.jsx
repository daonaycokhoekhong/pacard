import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useContext, useEffect } from "react";
import { SetContext } from "../../context/setContext/SetContext"

//Import Icon
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';

// Import Update Set tab
import UpdateSet from "../../components/updateSet/UpdateSet";
import ListCard from "../../components/listCard/ListCard"
import {deleteSet} from "../../context/setContext/apiCalls";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Learn from "../../components/learn/Learn"

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

export default function CardItem(props) {
  const { dispatch } = useContext(SetContext);

  const reData = props.dataFromParent;

  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
  ]
  const useColor = colors[Math.floor(Math.random()*colors.length)];

  const totalCard = reData.cards.length;
  let doneCard = 0;
  for (let c in reData.cards) {
    if (Number(reData.cards[c].level) !== 0) {
      doneCard++;
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openSetDelete, setOpenSetDelete] = React.useState(false);

  const handleOpenSetDelete = () => {
    setOpenSetDelete(true);
  };

  const handleCloseSetDelete = () => {
    setOpenSetDelete(false);
    setAnchorEl(null);

  };

  const handleSetDelete = (id) => {
    deleteSet(id, dispatch);
    setOpenSetDelete(false);
  };

  const [openDetail, setOpenDetail] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };
  return (
    <Card sx={{ maxWidth: 325 }}>
      <Box sx={{
        width: 325,
        height: 5,
        backgroundColor: useColor.primaryColor,
        '&:hover': {
          backgroundColor: useColor.secondaryColorColor,
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      />
      <CardContent>
        <Button size="normal"
          sx = {{
            color: 'black',
            backgroundColor: useColor.secondaryColor,
            borderRadius: 4,
            '&:hover': {
              backgroundColor: useColor.secondaryColor,
            },
            fontSize: 18,
            marginBottom: 2,
          }}>
            {props.dataFromParent.title}
          </Button>
        <Typography variant="body2" color="text.secondary"
          sx={{
            height: 20,
            marginLeft: 1,
          }}>
        </Typography>
        <Button size="normal"
          sx = {{
            color: 'black',
            backgroundColor: useColor.secondaryColor,
            borderRadius: 4,
            '&:hover': {
              backgroundColor: useColor.secondaryColor,
            },
            fontSize: 11,
            marginBottom: 2,
          }}>
            Tiến độ học: {doneCard}/{totalCard}
        </Button>
      </CardContent>
      <CardActions>
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
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem disableRipple>
            <EditIcon />
              Sửa
            <UpdateSet dataFromParent= {reData}/>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <ShareIcon />
            Chia sẻ
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
                  {reData.title}
                </Typography>
                <br/>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  🟠 Chủ đề: {reData.classify}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  🟢 Người đăng: {reData.uploadBy}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  🔴 Đánh giá: {reData.rating.star} ⭐
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  🟤 Trạng thái: {(reData.shared ? "Công khai" : "Riêng tư")}
                </Typography>
                <Typography variant="body2">
                  Mô tả.
                  <br />
                  {reData.desc}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleCloseDetail}>
                  Đóng
                </Button>
              </DialogActions>
            </Dialog>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleOpenSetDelete} sx = {{color: 'red'}} disableRipple>
            <DeleteIcon />
            Xóa
          </MenuItem>
          <Dialog
            open={openSetDelete}
            onClose={handleCloseSetDelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Cảnh báo ⚠️ ⚠️ ⚠️"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Bạn đang xóa bộ thẻ {reData.title}.
                Thao tác này sẽ không thể hoàn tác!!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSetDelete}>HỦY</Button>
              <Button onClick={() => handleSetDelete(reData._id)} autoFocus sx={{color: "red"}}>
                XÓA
              </Button>
            </DialogActions>
          </Dialog>
        </StyledMenu>
          {/*<Button size="small" startIcon={<PageviewIcon />} sx = {{color: 'Orange'}}> XEM THẺ*/}
          {/*</Button>*/}
          <ListCard dataFromParent= {reData}/>
          <Learn dataFromParent={reData.cards}/>
          {/*<Button size="small" startIcon={<PlayCircleFilledIcon />} sx = {{color: 'green'}}> HỌC*/}
          {/*</Button>*/}
      </CardActions>
    </Card>
  );
}
