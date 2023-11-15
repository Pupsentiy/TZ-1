import { cls } from "@/utils/helpers/cls/cls.ts";
import {
  type ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Button.module.scss";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      disabled,
      type = "button",
      fullWidth,
      ...otherProps
    } = props;
    return (
      <button
        type={type}
        className={cls([styles.Button, className], {
          fullWidth: Boolean(fullWidth),
          disabled: Boolean(disabled),
        })}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
