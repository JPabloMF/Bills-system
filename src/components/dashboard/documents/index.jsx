import Card from "../../shared/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DialogDocuments from "../../shared/DialogDocuments";
import "../../../style/Documents.css";

function index() {
  return (
    <>
      <Box ml="7%" textAlign="center">
        <Card
          title="Find a document"
          width="97%"
          height="112px"
          color="#00B0FF"
        >
          <div className="containerInputs">
            <p className="textInpunts">Filters:</p>
            <input
              type="text"
              className=" input inputName"
              placeholder="Documents name"
            />
            <input
              type="text"
              className=" input inputDate"
              placeholder="Documents date"
            />
            <CalendarTodayIcon />
            <input
              type="text"
              className=" input inputValue"
              placeholder="Documents value (range)"
            />
            <Button variant="contained">Apply filters</Button>
          </div>
        </Card>
        <div className="containerProducts">
          <Card
            title="Dinner fest"
            width="22%"
            height="160px"
            color="#757575"
            isEditable={true}
            dialog={<DialogDocuments />}
          >
            <p className="secondaryText">
              Date: <span className="subTitle">07/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$150.000</span>
              </p>
            </div>
            <div className="subSegment">
              dinner-fest.pdf <CloudDownloadIcon className="iconDown1" />
            </div>
          </Card>
          <Card
            title="Claro bill"
            width="22%"
            height="160px"
            color="#757575"
            isEditable={true}
            dialog={<DialogDocuments />}
          >
            <p className="secondaryText">
              Date: <span className="subTitle">07/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$50.000</span>
              </p>
            </div>
            <div className="subSegment">
              claro-bill.pdf <CloudDownloadIcon className="iconDown2" />
            </div>
          </Card>
          <Card
            title="Moto parts"
            width="22%"
            height="160px"
            color="#757575"
            isEditable={true}
            dialog={<DialogDocuments />}
          >
            <p className="secondaryText">
              Date: <span className="subTitle">07/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$500.000</span>
              </p>
            </div>
            <div className="subSegment">
              parts.pdf <CloudDownloadIcon className="iconDown3" />
            </div>
          </Card>
          <Card
            title="Clothes"
            width="22%"
            height="160px"
            color="#757575"
            isEditable={true}
            dialog={<DialogDocuments />}
          >
            <p className="secondaryText">
              Date: <span className="subTitle">07/17/2023</span>
            </p>
            <div>
              <p className="secondaryText">
                Value: <span className="subTitle">$250.000</span>
              </p>
            </div>
            <div className="subSegment">
              clothes.pdf <CloudDownloadIcon className="iconDown4" />
            </div>
          </Card>
        </div>
      </Box>
    </>
  );
}

export default index;
