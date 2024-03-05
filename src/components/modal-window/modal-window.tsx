import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import styles from "./modal.module.scss";

type ModalWindowProps = {
  children: ReactNode;
  open: boolean;
  toggle: () => void;
  handleClose: () => void;
};

export const ModalWindow = ({
  children,
  open,
  toggle,
  handleClose,
}: ModalWindowProps): JSX.Element => {
  useEffect(() => {
    const onEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.addEventListener("keydown", onEscapeKey);
    return () => {
      document.removeEventListener("keydown", onEscapeKey);
    };
  }, [handleClose]);

  return createPortal(
    open && (
      <div className={styles.root} onClick={toggle}>
        <div className={styles.window} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ),
    document.querySelector("#modal-root")!
  );
};


