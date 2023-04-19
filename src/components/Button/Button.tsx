import React from 'react';
import styled from 'styled-components';
import classes from './Button.module.scss';
import classnames from 'classnames';
// import './button.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'info' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StyledButton = styled.button.attrs<ButtonProps>((p) => ({
  className: classnames(
    classes.button,
    p?.color === 'primary' && classes.primary,
    p?.color === 'secondary' && classes.secondary,
    p?.color === 'info' && classes.info,
    p?.size === 'small' && classes.small,
    p?.size === 'large' && classes.large,
    p?.fullWidth && classes.fullWidth,
    p?.disabled && classes.disabled,
    p?.loading && classes.loading
  ),
}))<ButtonProps>``;

export const Button: React.FC<ButtonProps> = (p) => {
  return <StyledButton {...p} />;
};
