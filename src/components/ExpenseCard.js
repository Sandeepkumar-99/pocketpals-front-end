import { Card, CardContent, Typography } from "@mui/material";

const ExpenseCard = ({ expense }) => (
  <Card sx={{ mt: 1 }}>
    <CardContent>
      <Typography variant="subtitle1">{expense.title}</Typography>
      <Typography variant="body2">Amount: ${expense.amount}</Typography>
      <Typography variant="body2">
        Paid By: {expense.paidBy.firstName} {expense.paidBy.lastName}
      </Typography>
      <Typography variant="body2">
        Split Between: {expense.splitBetween.map(s => s.firstName).join(", ")}
      </Typography>
      <Typography variant="body2">
        Date: {new Date(expense.createdAt).toLocaleString()}
      </Typography>
    </CardContent>
  </Card>
);

export default ExpenseCard;