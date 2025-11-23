import { ButtonBase } from "@mui/material";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({children, ...props}: ButtonProps) {
    return (
        <ButtonBase
          className="basic-button"
          {...props}
          >
            {children}
        </ButtonBase>
    );
};