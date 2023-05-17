import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../../style/Cards.css";

function Cards() {
  return (
    <div className="containerCards">
      {" "}
      <Card
        sx={{
          minWidth: "33%",
          minHeight: 98,
          mr: 5,
          ml: 13,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="#FFFFFF"
              component="div"
              minHeight="35px"
              textAlign="center"
              paddingRight="60px"
            >
              <Button variant="contained" color="secondary">
                Register new bill
              </Button>
              Latest bill
            </Typography>
            <Typography variant="body2" fontSize={20} color="#000000">
              Hamburger $15.400
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ minWidth: "26%", minHeight: 98, mr: 5, textAlign: "center" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              minHeight="35px"
              color="#FFFFFF"
              component="div"
            >
              Saved money
            </Typography>
            <Typography variant="body2" fontSize={20} color="#000000">
              $250.000
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ minWidth: "26%", minHeight: 98, mr: 5, textAlign: "center" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="#FFFFFF"
              minHeight="35px"
              component="div"
            >
              Free money
            </Typography>
            <Typography variant="body2" fontSize={20} color="#000000">
              $25.000
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
