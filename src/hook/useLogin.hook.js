import { Form } from "antd";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage?.setItem("user", JSON.stringify(values));
    navigate("/");
    form?.resetFields();
  };
  return { onFinish, form };
};

export default useLogin;
