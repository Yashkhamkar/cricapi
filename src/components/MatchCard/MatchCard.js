import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import vs from "../../assets/versus.png";

const MatchCard = () => {
  const [matches, setMatches] = useState([]);
  const [matchesDetail, setMatchesDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState();
  const [ids, setIds] = useState();

  useEffect(() => {
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=63b43395-902f-4c4f-8156-bcd61f2a9360&offset=0"
    )
      .then((response) => response.json())
      .then((data) => {
        const matches = data.data;
        setMatches(matches);
        console.log(matches);
      });
  }, []);
  const cart = () => {
    return (
      <>
        {matches.map((match) => (
          <Card style={{ marginTop: 20 }}>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <img
                    src={match.teamInfo[0].img}
                    style={{ width: "300px", height: "250px" }}
                  ></img>
                  <Typography variant="h5">{match.teams[0]}</Typography>
                </Grid>
                <Grid item>
                  <img
                    src={vs}
                    style={{ width: "220px", height: "180px" }}
                  ></img>
                </Grid>
                <Grid item>
                  <img
                    src={match.teamInfo[0].img}
                    style={{ width: "300px", height: "250px" }}
                  ></img>
                  <Typography variant="h5">{match.teams[1]}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center" spacing={3}>
                <Typography>{match.status}</Typography>
                <Button variant="contained" style={{ marginLeft: 20 }}>
                  {match.dateTimeGMT}
                </Button>
              </Grid>
            </CardActions>
          </Card>
        ))}
      </>
    );
  };
  const dialog = () => {
    {
      matchesDetail.map((match) => (
        <Dialog>
          <DialogTitle id="alert-dialog-title">Match Details...</DialogTitle>
          <DialogContent id="alert-dialog-description">
            <Typography>{}</Typography>
          </DialogContent>
        </Dialog>
      ));
    }
  };
  return cart();
};

export default MatchCard;
