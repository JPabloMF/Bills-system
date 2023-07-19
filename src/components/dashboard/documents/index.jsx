import Card from "../../shared/Card";

function index() {
  return (
    <>
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
    </>
  );
}

export default index