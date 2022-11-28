import * as React from 'react';
import Learn from "../../components/learn/Learn"
import { useContext, useEffect } from "react";
import { CardContext } from "../../context/cardContext/CardContext"
import { getCardToReview } from "../../context/cardContext/apiCalls";
import { Box, Button } from "@mui/material";
import Header from "../../components/Header";

export default function Practice() {
  const { cards, dispatch } = useContext(CardContext);

  useEffect(() => {
    getCardToReview(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Box m="20px">
        <Header title="ÔN TẬP" subtitle="Ôn tập với tất cả những thẻ bạn đã học" />
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            <Learn dataFromParent={cards}/>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
