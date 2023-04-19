import React from 'react';
import classes from './Container.module.scss';
import classnames from 'classnames';
import styled from 'styled-components';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean;
  card?: boolean;
  align?: 'left' | 'center' | 'right';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  fullWidth?: boolean;
  fullHeight?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  height?: number;
  width?: number;
}

const StyledContainer = styled.div.attrs<ContainerProps>((p) => ({
  className: classnames(
    classes.root,
    p.row && classes.row,
    p?.align === 'left' && classes.alignStart,
    p?.align === 'center' && classes.alignCenter,
    p?.align === 'right' && classes.alignEnd,
    p?.justify === 'start' && classes.justifyStart,
    p?.justify === 'center' && classes.justifyCenter,
    p?.justify === 'end' && classes.justifyEnd,
    p?.justify === 'between' && classes.justifyBetween,
    p?.justify === 'around' && classes.justifyAround,
    p?.fullWidth && classes.fullWidth,
    p?.fullHeight && classes.fullHeight,
    p?.bordered && classes.bordered,
    p?.rounded && classes.rounded
  ),
}))<ContainerProps>`
  height: ${(p) => (p.height ? `${p.height}px` : 'auto')};
  width: ${(p) => (p.width ? `${p.width}px` : 'auto')};
`;
export const Container: React.FC<ContainerProps> = (p) => {
  return <StyledContainer {...p} />;
};
