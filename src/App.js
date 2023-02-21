import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getMatches } from "./api/Api";
import "./App.css";
import MatchCard from "./components/MatchCard/MatchCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{ marginTop: "20px" }}>Welcome to Crick-Score</h1>
      <Grid
        container
      >
        <Grid sm="2"></Grid>
        <Grid sm="8">
          <MatchCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
