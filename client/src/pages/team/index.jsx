import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid";
import CardItem from "../../components/cardItem/CardItem";
import * as React from "react";
import {useContext, useEffect} from "react";
import {SetContext} from "../../context/setContext/SetContext";
import {getAllSetsUser} from "../../context/setContext/apiCalls";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sets, dispatch } = useContext(SetContext);

  // Get Sets
  useEffect(() => {
    getAllSetsUser(dispatch);
  }, [dispatch]);

  return (
    <Box m="20px">
      <Header title="HỌC TẬP" subtitle="Chọn các bộ thẻ dưới đây để học nhé" />
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
        <Grid item xs={6}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {sets.map((value, idx) => (
              <Grid  xs={2} sm={4} md={4} value={value} key={value._id} item>
                <CardItem dataFromParent={value}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Team;
