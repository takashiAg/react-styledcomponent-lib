import React from 'react';
import styled from 'styled-components';
import classes from './Label.module.scss';
import classnames from 'classnames';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  color?: 'primary' | 'secondary' | 'info' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  label: string;
}

const StyledLabel = styled.label.attrs<LabelProps>((p) => ({
  className: classnames(classes.label, p?.fullWidth && classes.fullWidth),
}))<LabelProps>`
  &::before {
    content: '${(p) => p.label}';
  }
`;

export const Label: React.FC<LabelProps> = (p) => {
  return <StyledLabel {...p} />;
};
