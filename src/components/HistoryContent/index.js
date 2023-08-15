import React, { useState } from "react";
import DetailCard from "@/components/HistoryContent/detailCard";
import { Users } from "@/components/DashboardContent/dashboardData";
import { Card, ListItemText, Stack, Typography } from "@mui/material";

const HistoryContent = () => {
  const [driverId, setDriverId] = useState("");
  const [userCards, setUserCards] = useState([]);

  const handleSearch = () => {
    const searchData = Users.filter((user) =>
      user.driverId.toLowerCase().includes(driverId.toLowerCase())
    );
    setUserCards(searchData);
  };

  return (
    <div className="p-8">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Enter rider Id"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div>
        {userCards.length ? (
          <>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="h6">Email: &nbsp;</Typography>
              <Typography>{userCards[0].email}</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="h6">Rider-ID: &nbsp;</Typography>
              <Typography>{userCards[0].driverId}</Typography>
            </Stack>

            <Stack direction={"row"} gap={4}>
              <Card sx={{ width: "100px" }}>
                <ListItemText
                  primary="Country"
                  secondary={userCards[0].country}
                />
              </Card>
              <Card sx={{ width: "100px" }}>
                <ListItemText primary="City" secondary={userCards[0].city} />
              </Card>{" "}
              <Card sx={{ width: "100px" }}>
                <ListItemText
                  primary="Currency"
                  secondary={userCards[0].currency}
                />
              </Card>{" "}
              <Card sx={{ width: "100px" }}>
                <ListItemText
                  primary="Package"
                  secondary={userCards[0].amount}
                />
              </Card>
            </Stack>
            <Typography
              variant="h5"
              sx={{
                marginTop: "15px",
              }}
            >
              History:
            </Typography>
          </>
        ) : null}
        {userCards.length ? (
          userCards.map((user, index) => {
            return (
              <>
                <DetailCard key={index} user={user} />
              </>
            );
          })
        ) : (
          <div className="text-red-500">No User found with that Driver ID </div>
        )}
      </div>
    </div>
  );
};

export default HistoryContent;
