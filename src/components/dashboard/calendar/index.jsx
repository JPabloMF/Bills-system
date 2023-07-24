import Box from "@mui/material/Box";
import Card from "../../shared/Card";
import "../../../style/Calendar.css";
export default function index() {
  return (
    <>
      <Box marginLeft="100px">
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
            title="Moto accessorios"
            width="22%"
            height="140px"
            color="#f1c40f"
            isEditable={true}
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
