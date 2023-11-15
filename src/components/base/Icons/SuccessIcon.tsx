import { ReactComponent } from "@/assets/svg/success.svg";
import { type FC, type HTMLAttributes } from "react";

export const SuccessIcon: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return <ReactComponent {...props} />;
};
