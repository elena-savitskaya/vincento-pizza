import { ReactNode } from "react";
import { toast } from "react-toastify";

export const showErrorToast = (children: ReactNode) => {
  toast(children, {
    type: "error",
  });
};

export const showSuccessToast = (children: ReactNode) => {
  toast(children, {
    type: "success",
  });
};
