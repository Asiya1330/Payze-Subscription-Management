const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const formattedDateTime = `${formattedDate} ${formattedTime}`;
  return formattedDateTime;
};

export const Users = [
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Aug 10 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat Sept 10 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "Los Angeles",
    riderId: "rider-x231",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Jan 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat Feb 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "Los Angeles",
    riderId: "rider-x232",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Jun 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat July 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "Los Angeles",
    riderId: "rider-x233",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Feb 09 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat Mar 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "inactive",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "Los Angeles",
    riderId: "rider-x235",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat April 30 2023 05:00:00 GMT+0500 (Pakistan Standard Time`
    ),
    eDate: new Date(
      `Sat May 30 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "inactive",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "Los Angeles",
    riderId: "rider-x236",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat May 30 2023 05:00:00 GMT+0500 (Pakistan Standard Time`
    ),
    eDate: new Date(
      `Sat June 30 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "340",
    currency: "usd",
    email: "jhon.doe@gmail.com",
    city: "new york",
    riderId: "rider-x236",
  },
];

export const options = [
  { value: "monthly", label: "Month Revenue" },
  { value: "yearly", label: "Year Revenue" },
  { value: "day", label: "Day Revenue" },
  { value: "custom", label: "Custom Date Range" },
];
