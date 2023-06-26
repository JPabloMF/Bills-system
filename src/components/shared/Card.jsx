import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";

function Card({ width, height, mr, ml, color, children, title }) {
  return (
    <div>
      <MuiCard
        sx={{
          width,
          height,
          mr,
          ml,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              minHeight="35px"
              color="#FFFFFF"
              bgcolor={color}
              component="div"
            >
              {title}
            </Typography>
            {children}
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </div>
  );
}

export default Card;
