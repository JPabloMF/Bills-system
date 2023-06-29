import Card from "../../shared/Card";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SpaIcon from "@mui/icons-material/Spa";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DialogBills from "./DialogBills";
import "../../../style/Card.css";

function Bills() {
  return (
    <>
      <Box
        ml="64px"
        display="flex"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Card
          title="Amount of expenses"
          width="28%"
          height="98px"
          color="#00B0FF"
        >
          <p className="secondaryText">
            <strong>25</strong> Expenses
          </p>
        </Card>
        <Card title="Available money" width="28%" height="98px" color="#33EB91">
          <p className="secondaryText">$250.000</p>
        </Card>
        <Card title="Saved money" width="28%" height="98px" color=" #F44336 ">
          <p className="secondaryText">$0</p>
        </Card>
      </Box>
      <Box
        ml="64px"
        display="flex"
        mt="32px"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Card title="Category" width="20%" height="360px" color=" #00B0FF ">
          <ul className="listIcons">
            <li className="icons">
              <HomeIcon className="icon" /> Home
            </li>
            <li className="icons">
              <PedalBikeIcon className="icon" /> Transportation
            </li>
            <li className="icons">
              <RestaurantIcon className="icon" /> Feeding
            </li>
            <li className="icons">
              <LocalMallIcon className="icon" /> Fashion
            </li>
            <li className="icons">
              <SpaIcon className="icon" /> Health and wellness
            </li>
            <li className="icons">
              <SportsEsportsIcon className="icon" /> Entertainment
            </li>
            <li className="icons">
              <AutoStoriesIcon className="icon" /> Education
            </li>
            <li className="icons">
              <InsertDriveFileIcon className="icon" /> Taxes
            </li>
            <li className="icons">
              <CreditCardIcon className="icon" /> Bank commitments
            </li>
          </ul>
        </Card>
        <Card
          title="Motorcycle parts"
          width="32%"
          height="150px"
          color=" #757575 "
          isEditable={true}
        >
          <p className="subtext">
            I bought a couple of tyres,also bought an air filter and detailing
            stuff
          </p>
          <p className="subtext"></p>
          <hr className="lineCard" />
          <strong>Total cost:</strong>$350.000
        </Card>
        <Card
          title="Helmet"
          width="32%"
          height="150px"
          color=" #757575 "
          isEditable={true}
        >
          <DialogBills />
          <p className="subtext">Just a helmet</p>
          <p className="subtextHelmet"> </p>
          <hr className="lineCard" />
          <strong>Total cost:</strong>$1.550.000
        </Card>
      </Box>
    </>
  );
}

export default Bills;
