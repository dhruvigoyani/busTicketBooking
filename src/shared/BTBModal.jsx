import { Modal } from "antd";

const BTBModal = ({ children, open, handleCancel, title }) => {
  return (
    <Modal open={open} title={title} onCancel={handleCancel} footer={[]}>
      {children}
    </Modal>
  );
};

export default BTBModal;
