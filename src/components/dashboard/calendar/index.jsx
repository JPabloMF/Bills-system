import Box from "@mui/material/Box";
import Card from "../../shared/Card";
import "../../../style/Calendar.css";
import DialogCalendar from "../../shared/DialogCalendar";
export default function index() {
  return (
    <>
      <Box
        marginLeft="100px"
        marginRight="40px"
        bgcolor="#FFFFFF"
        padding="25px"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        className="prueba"
      >
        <div className="containerMeasurement">
          <p className="measurementTitle">Priority: </p>
          <div className="subdivisions">
            <div className="firstColor color1"></div>
            <p className="subtitle">High</p>
          </div>
          <div className="subdivisions medium">
            <div className="firstColor color2"></div>
            <p className="subtitle">Medium</p>
          </div>
          <div className="subdivisions">
            <div className="firstColor color3"></div>
            <p className="subtitle">Low</p>
          </div>
        </div>

        <h2 className="month">January</h2>
        <div className="containerCards">
          <Card
            title="Moto taxes "
            width="22%"
            height="140px"
            color="#F44336"
            isEditable={true}
            dialog={<DialogCalendar title="Edit Moto taxes" />}
            className="cardsTitle"
          >
            <p className="secondaryText">
              Date: <span className="subTitle">01/22/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$150.000</span>
              </p>
            </div>
          </Card>
          <Card
            title="Apartment due"
            width="22%"
            height="140px"
            color="#F44336"
            isEditable={true}
            dialog={<DialogCalendar title="Edit Apartment due" />}
            className="cardsTitle"
          >
            <p className="secondaryText">
              Date: <span className="subTitle">01/13/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$4.050.000</span>
              </p>
            </div>
          </Card>
          <Card
            title="Clothes"
            width="22%"
            height="140px"
            color="#33EB91"
            isEditable={true}
            dialog={<DialogCalendar title="Edit clothes" />}
            className="cardsTitle"
          >
            <p className="secondaryText">
              Date: <span className="subTitle">01/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$289.000</span>
              </p>
            </div>
          </Card>
        </div>
        <h2 className="month">February</h2>
        <div className="containerCards">
          <Card
            title="Apartment due"
            width="22%"
            height="140px"
            color="#F44336"
            isEditable={true}
            dialog={<DialogCalendar title="Edit Apartment due" />}
            className="cardsTitle"
          >
            <p className="secondaryText">
              Date: <span className="subTitle">02/13/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$4.050.000</span>
              </p>
            </div>
          </Card>
          <Card
            title="Moto accessorio"
            width="22%"
            height="140px"
            color="#f1c40f"
            isEditable={true}
            dialog={<DialogCalendar title="Edit Moto accessorios" />}
            className="cardsTitle"
          >
            <p className="secondaryText">
              Date: <span className="subTitle">02/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$189.000</span>
              </p>
            </div>
          </Card>
        </div>
      </Box>
    </>
  );
}
