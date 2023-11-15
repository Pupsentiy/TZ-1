import { fetchAuth } from "@/api/fetchAuth";
import comp from "@/assets/img/img-01.webp";
import { Button } from "@/components/base/Button";
import {
  DoNotShowPassword,
  EmailIcon,
  PasswordIcon,
  ShowPasswordIcon,
} from "@/components/base/Icons";
import { Input } from "@/components/base/Input";
import { cls } from "@/utils/helpers/cls/cls";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { memo, useCallback, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./Login.module.scss";

interface LoginProps {
  className?: string;
  openModal?: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInForm {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().email("Invalid email format").required().trim(),
  password: yup.string().min(8).required(),
});

export const Login = memo(
  ({ className, openModal, setSuccess, setError }: LoginProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<{ [key: string]: boolean }>({
      email: false,
      password: false,
    });
    const {
      handleSubmit,
      control,
      reset,
      formState: { errors },
    } = useForm<SignInForm>({
      mode: "onSubmit",
      values: { email: "", password: "" },
      resolver: yupResolver(loginSchema),
    });
    const onSubmit: SubmitHandler<SignInForm> = async (data) => {
      const res = await fetchAuth(data);
      reset();
      openModal?.();
      if (res === 200) {
        setSuccess(true);
      } else {
        setError(true);
      }
    };

    const toggleMaskInputPassword = () => {
      setToggle(!toggle);
    };

    const onChangeFocus = useCallback(
      (key: string) => {
        setIsFocus({ ...isFocus, [key]: !isFocus[key] });
      },
      [isFocus],
    );

    console.log(isFocus);
    return (
      <div className={cls([styles.Login, className])}>
        <img className={styles.img} src={comp} alt="IMG" />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Member Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.login_from}>
            <div className={styles.wrapper_input}>
              <span
                className={cls([styles.symbol], {
                  [styles.pass]: isFocus["email"],
                })}
              >
                <EmailIcon />
              </span>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="email"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Input
                    className={styles.input}
                    placeholder={!isFocus["email"] ? "Email" : ""}
                    value={value}
                    onChange={onChange}
                    onFocus={() => onChangeFocus("email")}
                    onBlur={() => onChangeFocus("email")}
                  />
                )}
              />
            </div>
            <small className={styles.error}>{errors.email?.message}</small>
            <div className={styles.wrapper_input}>
              <span
                className={cls([styles.symbol], {
                  [styles.pass]: isFocus["password"],
                })}
              >
                <PasswordIcon />
              </span>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="password"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Input
                    className={styles.input}
                    placeholder={!isFocus["password"] ? "Password" : ""}
                    value={value}
                    onChange={onChange}
                    type={toggle ? "text" : "password"}
                    onFocus={() => onChangeFocus("password")}
                    onBlur={() => onChangeFocus("password")}
                  />
                )}
              />

              <Button
                className={styles.show_password}
                onClick={toggleMaskInputPassword}
              >
                {toggle ? <DoNotShowPassword /> : <ShowPasswordIcon />}
              </Button>
            </div>
            <small className={styles.error}>{errors.password?.message}</small>
            <Button type={"submit"} className={styles.button}>
              LOGIN
            </Button>
          </form>

          <div className={styles.wrapper_link}>
            <span>Forgot</span>
            <a className={styles.link} href="#">
              Username / Password?
            </a>
          </div>
        </div>
      </div>
    );
  },
);
