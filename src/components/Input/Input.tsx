import React from 'react';
import styled from 'styled-components';
import classes from './Input.module.scss';
import classnames from 'classnames';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  color?: 'primary' | 'secondary' | 'info' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StyledInput = styled.input.attrs<InputProps>((p) => ({
  className: classnames(
    classes.input,
    p?.fullWidth && classes.fullWidth,
    p?.disabled && classes.disabled
  ),
}))<InputProps>`
  box-sizing: border-box;
`;

export const Input: React.FC<InputProps> = (p) => {
  return <StyledInput {...p} />;
};
