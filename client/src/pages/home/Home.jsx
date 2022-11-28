import * as React from 'react';

import "./home.scss";
import Grid from '@mui/material/Grid';
import { useContext, useEffect } from "react";
import { SetContext } from "../../context/setContext/SetContext";
import { getAllSetsUser } from "../../context/setContext/apiCalls";

// Import Item
import CardItem from "../../components/cardItem/CardItem"

import CreateSet from "../../components/createSet/CreateSet";

export default function Home() {
  const { sets, dispatch } = useContext(SetContext);

  // Get Task
  useEffect(() => {
    getAllSetsUser(dispatch);
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home-container">

        <div className="home-top">
          <div className="home-title">
            Dashboard
          </div>
        </div>
        <div className="new-document">
          <CreateSet/>
        </div>
        <div className="home-bottom">
          <div className="home-data">
            <Grid item xs={6}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {sets.map((value, idx) => (
                  <Grid  xs={2} sm={4} md={4} value={value} key={value._id} item>
                    <CardItem dataFromParent={value}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
