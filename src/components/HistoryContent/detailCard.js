import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";
import { format } from "date-fns";

const RenderCardContent = ({ user }) => (
  <React.Fragment>
    <CardContent>
      <Stack direction={"row"} alignItems={"center"} gap={3}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.fname} {user.lname}
        </Typography>
        <Chip
          color={user.status === "active" ? "primary" : "error"}
          label={user.status}
        />
      </Stack>
      <Typography variant="h5" component="div">
        {format(user.sDate, "EEE MMM dd yyyy HH:mm:ss")}{" "}
        <span className="text-green-500">to</span>{" "}
        {format(user.eDate, "EEE MMM dd yyyy HH:mm:ss")}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {user.email}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ user }) {
  return (
    <Box sx={{ minWidth: 275, margin: "10px 0" }}>
      <Card variant="outlined">
        <RenderCardContent user={user} />
      </Card>
    </Box>
  );
}
