import { Button } from "antd";

const BTBButton = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export default BTBButton;
