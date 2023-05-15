import React from 'react';
import classes from './Image.module.scss';
import styled from 'styled-components';
import classnames from 'classnames';

export interface ImageProps extends React.HTMLAttributes<HTMLSpanElement> {
  src: string;
  fullWidth?: boolean;
  width?: number;
  aspectRatio?: number;
}

const StyledImage = styled.span.attrs<ImageProps>((p: ImageProps) => ({
  className: classnames(classes.root, {
    [classes.fullWidth]: !!p?.fullWidth,
  }),
}))<ImageProps>`
  box-sizing: border-box;
  background-image: url(${(p: ImageProps) => p.src});
  padding-top: ${(p: ImageProps) => (p?.aspectRatio ? `${p.aspectRatio * 100}%` : '100%')};
  ${(p: ImageProps) => p?.width && `width: ${p?.width}px;`}
`;

export const Image: React.FC<ImageProps> = (p) => {
  return <StyledImage {...p} />;
};
