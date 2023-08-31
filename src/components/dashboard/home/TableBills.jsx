import { DataGrid } from "@mui/x-data-grid";
import { Button, Tooltip } from "@mui/material";
import "../../../style/TableBills.css";

function TableBills({ tableData }) {
  const columns = [
    { field: "name", headerName: "Name", width: 350 },
    { field: "value", headerName: "Value", width: 330 },
    { field: "duedate", headerName: "Due date", width: 350 },
    {
      field: "",
      headerName: "Actions",
      width: 130,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = (e) => {
          console.log(e);
        };

        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onClick}
          >
            View details
          </Button>
        );
      },
    },
  ];

  return (
    <div className="ContainerTable">
      <h4 className="tittleTable">Monthly bills</h4>
      <DataGrid
        rows={tableData.table}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default TableBills;
