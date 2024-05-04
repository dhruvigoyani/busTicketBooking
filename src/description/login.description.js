export const loginField = [
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
    label: "Password",
    name: "password",
    placeholder: "Enter Password",
    rules: [
      {
        required: true,
        message: "Please input your last name",
      },
    ],
    type: "password",
  },
];
