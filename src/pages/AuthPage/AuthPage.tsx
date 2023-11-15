import { Login } from "@/components/Login";
import { ModalInfo } from "@/components/ModalInfo";
import { cls } from "@/utils/helpers/cls/cls";
import { useState } from "react";
import styles from "./AuthPage.module.scss";

interface AuthPageProps {
  className?: string;
}

const AuthPage = ({ className }: AuthPageProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const closeHandler = () => {
    setIsOpenModal(false);
    setSuccess(false);
    setError(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div className={cls([styles.AuthPage, className])}>
      <Login
        openModal={openModal}
        setSuccess={setSuccess}
        setError={setError}
      />
      <ModalInfo
        isOpenModal={isOpenModal}
        closeHandler={closeHandler}
        success={success}
        error={error}
      />
    </div>
  );
};

export default AuthPage;
