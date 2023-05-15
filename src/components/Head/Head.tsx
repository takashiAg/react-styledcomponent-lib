import React from 'react';
import classes from './Head.module.scss';
import classnames from 'classnames';
import styled from 'styled-components';

export interface HeadProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const StyledHead = styled.h1.attrs<HeadProps>((p: HeadProps) => ({
  className: classnames(classes.root, {}),
}))<HeadProps>``;

export const Head: React.FC<HeadProps> = (p) => {
  return <StyledHead {...p} />;
};
