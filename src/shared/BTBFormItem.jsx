import { Form } from "antd";

const BTBFormItem = ({ children, ...rest }) => <Form.Item {...rest}>{children}</Form.Item>

export default BTBFormItem