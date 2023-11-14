import { cls } from "@/utils/helpers/cls/cls";
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
} from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    ...otherProps
  } = props;


  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={cls([styles.Input, className])}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
