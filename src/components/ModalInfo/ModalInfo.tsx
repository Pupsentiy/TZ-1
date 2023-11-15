import { FailIcon, SuccessIcon } from "@/components/base/Icons";
import { Modal } from "@/components/base/Modal";
import { cls } from "@/utils/helpers/cls/cls.ts";
import { Fragment, memo } from "react";

import styles from "./ModalInfo.module.scss";

interface ModalInfoProps {
  className?: string;
  isOpenModal?: boolean;
  closeHandler?: () => void;
  error: boolean;
  success: boolean;
}

export const ModalInfo = memo(
  ({
    className,
    isOpenModal,
    closeHandler,
    error,
    success,
  }: ModalInfoProps) => {
    return (
      <Modal
        className={cls([styles.ModalInfo, className])}
        isOpen={isOpenModal}
        onClose={closeHandler}
      >
        {success && (
          <Fragment>
            <h1>User Authorized</h1>
            <div className={styles.wrapper_success}>
              <SuccessIcon className={styles.icon} />
              <span
                className={cls([styles.iconBg, className], {
                  [styles.opened]: success,
                })}
              />
            </div>
          </Fragment>
        )}

        {error && (
          <Fragment>
            <h1>User not found</h1>
            <div className={styles.wrapper_error}>
              <FailIcon className={styles.icon} />
              <span
                className={cls([styles.iconBg, className], {
                  [styles.opened]: error,
                })}
              />
            </div>
          </Fragment>
        )}
      </Modal>
    );
  },
);
