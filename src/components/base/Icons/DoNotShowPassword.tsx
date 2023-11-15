import { ReactComponent } from "@/assets/svg/Noeye.svg";
import { type FC, type HTMLAttributes } from "react";

export const DoNotShowPassword: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <ReactComponent {...props} />;
};
