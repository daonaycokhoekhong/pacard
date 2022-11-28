import * as React from 'react';
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PageviewIcon from '@mui/icons-material/Pageview';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {CardContext} from "../../context/cardContext/CardContext";
import {deleteCard} from "../../context/cardContext/apiCalls";
import {DataGrid} from "@mui/x-data-grid";
import AddCard from "../../components/addCard/AddCard"



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function ListCard(props) {

  const { dispatch } = useContext(CardContext);

  const reData = props.dataFromParent;
  // const [currentSet, setCurrentSet] = React.useState(initSet);

  // useEffect(() => {
  //   getAllSetsUser(dispatch);
  // }, [dispatch]);
  //

  // const handleSetChoose = (value) => {
  //   setCurrentSet(value);
  // };

  const set_id = reData._id;

  // const [open, setOpen] = React.useState(true);
  //
  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const [openCardDelete, setOpenCardDelete] = React.useState(false);

  const handleOpenCardDelete = () => {
    setOpenCardDelete(true);
  };

  const handleCloseCardDelete = () => {
    setOpenCardDelete(false);
  };

  const handleCardDelete = (set_id, id) => {
    deleteCard(set_id, id, dispatch);
    // setOpenSetDelete(false);
  };


  const columns = [
    {
      field: "front",
      headerName: "Mặt trước",
      headerAlign: 'center',
      width: 200,
      editable: false,
      sortable: true,
      filterable: true,
      align: "center"
    },
    { field: "back", headerName: "Mặt sau", width: 480 ,editable: false,
      sortable: true,
      filterable: true,
      autoHeight: true
    },
    { field: "level", headerName: "Cấp độ", width: 100 ,editable: false,
      headerAlign: 'center',
      sortable: true,
      filterable: true,
      align: "center"
    },
    {
      field: "action",
      headerName: "Thao tác",
      headerAlign: 'center',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            {/*<Readdocs dataFromParent={params.row} />*/}
            {/*<Editdocs dataFromParent={params.row} />*/}
            <Button size="small" startIcon={<DeleteOutlineIcon />} sx = {{color: 'red'}} onClick={handleOpenCardDelete}>XÓA
            </Button>
            <Dialog
              open={openCardDelete}
              onClose={handleCloseCardDelete}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Bạn có muốn xóa thẻ này?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Thao tác này sẽ không thể hoàn tác!!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseCardDelete}>HỦY</Button>
                <Button onClick={() => handleCardDelete(set_id, params.row._id)} autoFocus sx={{color: "red"}}>
                  XÓA
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      },
    },
  ];

  const [openTab, setOpenTab] = React.useState(false);

  const handleClickOpenTab = () => {
    setOpenTab(true);
  };

  const handleCloseTab = () => {
    setOpenTab(false);
  };

  return (
    <div>
      <Button size="small" startIcon={<PageviewIcon />} sx = {{color: 'Orange'}} onClick={handleClickOpenTab}>
        Xem thẻ
      </Button>
      <Dialog
        fullScreen
        open={openTab}
        onClose={handleCloseTab}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseTab}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Danh sách thẻ
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
        </List>
        <AddCard dataFromParent={reData}/>
        <div  style={{ height: '95%', width: '100%'  }}>
          <DataGrid
            rows={reData.cards}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5,10,15]}
            checkboxSelection
            getRowId={(e) => e._id}
            rowHeight={100}
          />
        </div>
      </Dialog>
    </div>
  );
}
