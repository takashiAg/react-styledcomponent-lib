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

const StyledContainer = styled.div.attrs<ContainerProps>((p: ContainerProps) => ({
  className: classnames(classes.root, {
    [classes.row]: !!p?.row,
    [classes.alignStart]: p?.align === 'left',
    [classes.alignCenter]: p?.align === 'center',
    [classes.alignEnd]: p?.align === 'right',
    [classes.justifyStart]: p?.justify === 'start',
    [classes.justifyCenter]: p?.justify === 'center',
    [classes.justifyEnd]: p?.justify === 'end',
    [classes.justifyBetween]: p?.justify === 'between',
    [classes.justifyAround]: p?.justify === 'around',
    [classes.fullWidth]: !!p?.fullWidth,
    [classes.fullHeight]: !!p?.fullHeight,
    [classes.bordered]: !!p?.bordered,
    [classes.rounded]: !!p?.rounded,
  }),
}))<ContainerProps>`
  height: ${(p) => p.height}px;
  width: ${(p) => p.width}px;
`;
export const Container: React.FC<ContainerProps> = (p) => {
  return <StyledContainer {...p} />;
};
