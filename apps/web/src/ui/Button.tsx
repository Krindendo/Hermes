import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import clsx from "clsx";

const sizeClassnames = {
  big: "",
  small: "",
  tiny: "",
};

const colorClassnames = {
  primary: "",
  secondary: "",
  error: "",
  transparent: "",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
};

export const Button: React.FC<ButtonProps> = ({ size = "big", color = "primary" }) => (
  <button type="button" className={clsx(sizeClassnames[size], colorClassnames[color])}>
    Test
  </button>
);
