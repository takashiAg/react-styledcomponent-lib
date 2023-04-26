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
  className: classnames(classes.button, {
    [classes.primary]: p?.color === 'primary',
    [classes.secondary]: p?.color === 'secondary',
    [classes.info]: p?.color === 'info',
    [classes.small]: p?.size === 'small',
    [classes.large]: p?.size === 'large',
    [classes.fullWidth]: !!p?.fullWidth,
    [classes.disabled]: !!p?.disabled,
    [classes.loading]: !!p?.loading,
  }),
}))<ButtonProps>`
  box-sizing: border-box;
`;

export const Button: React.FC<ButtonProps> = (p) => {
  return <StyledButton {...p} />;
};
