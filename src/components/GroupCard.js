import { Card, CardContent, Typography, Collapse, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseCard from "./ExpenseCard";

const GroupCard = ({ group, token }) => {
  const [expanded, setExpanded] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleExpand = async () => {
    setExpanded(!expanded);
    if (!expanded && expenses.length === 0) {
      // Fetch expenses for the group
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/expenses/${group._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(res.data.expenses);
      } catch (err) {
        console.error("Error fetching group expenses:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{group.name}</Typography>
        <Typography variant="body2">ID: {group._id}</Typography> {/* Added Group ID */}
        <Typography variant="body2">{group.description}</Typography>
        <Typography variant="body2">Created By: {group.groupCreator}</Typography>
        <Typography variant="body2">Members: {group.members.length}</Typography>
        <Typography variant="body2">Last Updated: {new Date(group.updatedAt).toLocaleString()}</Typography>

        <Box mt={1}>
          <Button size="small" onClick={toggleExpand}>
            {expanded ? "Hide Expenses" : "View Expenses"}
          </Button>
        </Box>

        <Collapse in={expanded}>
          {loading ? (
            <Typography mt={1}>Loading expenses...</Typography>
          ) : (
            expenses.map(exp => <ExpenseCard key={exp._id} expense={exp} />)
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default GroupCard;