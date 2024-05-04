export const reservationField = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Enter First name",
    rules: [
      {
        required: true,
        message: "Please input your first name",
      },
    ],
    type: "text",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter Last name",
    rules: [
      {
        required: true,
        message: "Please input your last name",
      },
    ],
    type: "text",
  },
  {
    name: "email",
    label: "E-mail",
    placeholder: "Enter you email",
    rules: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please input your E-mail!",
      },
    ],
    type: "text",
  },
  {
    name: "seatNumber",
    label: "Seat number",
    placeholder: "Enter seat number",
    rules: [
      {
        required: true,
        message: "Please input your seat number!",
      },
    ],
    type: "select",
  },
  {
    name: "dateOfBooking",
    label: "Date of Booking",
    placeholder: "Select booking date",
    rules: [
      {
        required: true,
        message: "Please input your booking date!",
      },
    ],
    type: "date",
  },
];
