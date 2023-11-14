import { cls } from "@/utils/helpers/cls/cls";
import styles from "./AuthPage.module.scss";

interface AuthPageProps {
  className?: string;
}

const AuthPage = ({ className }: AuthPageProps) => {
  return <div className={cls([styles.AuthPage, className])}>asd</div>;
};

export default AuthPage;
