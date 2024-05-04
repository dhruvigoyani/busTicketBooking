import { Input } from "antd";
import { equal, ternary } from "../utils/javascript";

const BTBInput = ({ ...rest }) =>
  ternary(
    equal(rest?.type, "password"),
    <Input.Password {...rest} />,
    <Input {...rest} />
  );
export default BTBInput;
