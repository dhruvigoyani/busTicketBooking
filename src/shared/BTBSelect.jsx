import { Select } from "antd";

const BTBSelect = ({ handleChange, options, ...rest }) => (
  <Select
    style={{
      width: 120,
    }}
    onChange={handleChange}
    options={options}
    {...rest}
  />
);
export default BTBSelect;
