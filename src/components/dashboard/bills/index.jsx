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
import DialogBills from "../../shared/DialogBills";
import { useState, useEffect } from "react";
import "../../../style/Card.css";
import "../../../style/Bills.css";

function Bills() {
  const [data, setData] = useState();
  const [selectedBill, setSelectedBill] = useState();

  useEffect(() => {
    fetch("https://data-bills-system-production.up.railway.app/bills")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setSelectedBill(Object.keys(json.expenses)[0]);
      });
  }, []);

  const handleSelectBill = (bill) => setSelectedBill(bill);

  const hasExpense = (expenseName) => {
    if (data) {
      return expenseName in data?.expenses ? "exist" : "";
    }
  };

  const isExpenseSelected = (expenseName) =>
    expenseName === selectedBill ? "selected" : "";

  return (
    <>
      <Box
        className="containerBills"
        ml="64px"
        display="flex"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Card
          className="cardsBills"
          title="Amount of expenses"
          width="28%"
          height="98px"
          color="#00B0FF"
        >
          <p className="secondaryText">
            <strong>{data?.amountOfExpenses}</strong> Expenses
          </p>
        </Card>
        <Card
          className="cardsBills"
          title="Available money"
          width="28%"
          height="98px"
          color="#33EB91"
        >
          <p className="secondaryText">{data?.availableMoney}</p>
        </Card>
        <Card
          className="cardsBills"
          title="Saved money"
          width="28%"
          height="98px"
          color=" #F44336 "
        >
          <p className="secondaryText">{data?.savedMoney}</p>
        </Card>
      </Box>
      <Box
        className="containerCategory"
        ml="64px"
        display="flex"
        mt="32px"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Card
          className="cardsBills"
          title="Category"
          width="20%"
          height="360px"
          color=" #00B0FF "
        >
          <ul className="listIcons">
            <li
              className={`icons ${hasExpense("home")} ${isExpenseSelected(
                "home"
              )}`}
              onClick={() => handleSelectBill("home")}
            >
              <HomeIcon className="icon" /> Home
            </li>
            <li
              className={`icons ${hasExpense(
                "transportation"
              )} ${isExpenseSelected("transportation")}`}
              onClick={() => handleSelectBill("transportation")}
            >
              <PedalBikeIcon className="icon" /> Transportation
            </li>
            <li
              className={`icons ${hasExpense("feeding")} ${isExpenseSelected(
                "feeding"
              )}`}
              onClick={() => handleSelectBill("feeding")}
            >
              <RestaurantIcon className="icon" /> Feeding
            </li>
            <li
              className={`icons ${hasExpense("fashion")} ${isExpenseSelected(
                "fashion"
              )}`}
              onClick={() => handleSelectBill("fashion")}
            >
              <LocalMallIcon className="icon" /> Fashion
            </li>
            <li
              className={`icons ${hasExpense("health")} ${isExpenseSelected(
                "health"
              )}`}
              onClick={() => handleSelectBill("health")}
            >
              <SpaIcon className="icon" /> Health and wellness
            </li>
            <li
              className={`icons ${hasExpense(
                "entertainment"
              )} ${isExpenseSelected("entertainment")}`}
              onClick={() => handleSelectBill("entertainment")}
            >
              <SportsEsportsIcon className="icon" /> Entertainment
            </li>
            <li
              className={`icons ${hasExpense("education")} ${isExpenseSelected(
                "education"
              )}`}
              onClick={() => handleSelectBill("education")}
            >
              <AutoStoriesIcon className="icon" /> Education
            </li>
            <li
              className={`icons ${hasExpense("taxes")} ${isExpenseSelected(
                "taxes"
              )}`}
              onClick={() => handleSelectBill("taxes")}
            >
              <InsertDriveFileIcon className="icon" /> Taxes
            </li>
            <li
              className={`icons ${hasExpense("bank")} ${isExpenseSelected(
                "bank"
              )}`}
              onClick={() => handleSelectBill("bank")}
            >
              <CreditCardIcon className="icon" /> Bank commitments
            </li>
          </ul>
        </Card>
        {data &&
          data?.expenses[selectedBill].map((expense, index) => (
            <Card
              className="cardsBills"
              key={index}
              title={expense.name}
              width="32%"
              height="150px"
              color=" #757575 "
              isEditable={true}
              dialog={<DialogBills />}
            >
              <p className="subtext">{expense.description}</p>
              <p className="subtext"></p>
              <hr className="lineCard" />
              <strong>Total cost:</strong>
              {expense.total}
            </Card>
          ))}
      </Box>
    </>
  );
}

export default Bills;
