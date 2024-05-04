import { loginField } from "../../description/login.description";
import useLogin from "../../hook/useLogin.hook";
import BTBButton from "../../shared/BTBButton";
import BTBForm from "../../shared/BTBForm";
import BTBFormItem from "../../shared/BTBFormItem";
import BTBInput from "../../shared/BTBInput";
import { LOGIN, LOGIN_FORM } from "../../utils/constant";

const Login = () => {
  const { onFinish, form } = useLogin();
  return (
    <>
      <h4>{LOGIN_FORM}</h4>
      <BTBForm {...{ onFinish, form }}>
        {loginField?.map((field, index) => (
          <BTBFormItem {...field} key={index}>
            <BTBInput {...field} />
          </BTBFormItem>
        ))}
        <BTBFormItem
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <BTBButton type="primary" htmlType="submit">
            {LOGIN}
          </BTBButton>
        </BTBFormItem>
      </BTBForm>
    </>
  );
};
export default Login;
