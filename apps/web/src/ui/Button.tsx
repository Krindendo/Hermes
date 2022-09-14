import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
};

const Button: React.FC<ButtonProps> = ({ children, disabled, ref, ...props }) => (
  <Container data-testid="button" {...props}>
    {children}
  </Container>
);

const sizeClassnames = {
  big: css`
    padding: 10px;
    border-radius: 10px;
  `,
  small: css``,
  tiny: css``,
};

const colorClassnames = {
  primary: css`
    background-color: ${({ theme }) => theme.palette.primary.main};
  `,
  secondary: css``,
  error: css``,
  transparent: css``,
};

const Container = styled.button<ButtonProps>`
  cursor: pointer;

  ${(props) => sizeClassnames[props.size || "big"]}
  ${(props) => colorClassnames[props.color || "primary"]}
`;

export default Button;
