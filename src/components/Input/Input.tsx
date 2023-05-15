import React from 'react';
import styled from 'styled-components';
import classes from './Input.module.scss';
import classnames from 'classnames';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  color?: 'primary' | 'secondary' | 'info' | 'default';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StyledInput = styled.input.attrs<InputProps>((p: InputProps) => ({
  className: classnames(classes.input, {
    [classes.fullWidth]: !!p?.fullWidth,
    [classes.disabled]: !!p?.disabled,
  }),
}))<InputProps>`
  box-sizing: border-box;
`;

export const Input: React.FC<InputProps> = (p) => {
  return <StyledInput {...p} />;
};
