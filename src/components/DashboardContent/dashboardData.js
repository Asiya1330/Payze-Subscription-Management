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
      `Sat Aug 01 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Sept 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat July 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Jun 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat MAr 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat Feb 09 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    eDate: new Date(
      `Sat June 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
  },
  {
    fname: "Jhon",
    lname: "Doe",
    sDate: new Date(
      `Sat April 30 2023 05:00:00 GMT+0500 (Pakistan Standard Time`
    ),
    eDate: new Date(
      `Sat May 11 2023 05:00:00 GMT+0500 (Pakistan Standard Time)`
    ),
    status: "active",
    country: "United State",
    amount: "220",
    currency: "usd",
    email: "jhon.doe@gmail.com",
  },
];

export const options = [
    { value: "monthly", label: "Month Revenue" },
    { value: "yearly", label: "Year Revenue" },
    { value: "day", label: "Day Revenue" },
    { value: "custom", label: "Custom Date Range" },
  ];