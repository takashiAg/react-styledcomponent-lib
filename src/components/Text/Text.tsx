import React from 'react';
import classes from './Text.module.scss';
import classnames from 'classnames';
import styled from 'styled-components';

export interface TextProps extends React.HTMLAttributes<HTMLPreElement> {
  align?: 'left' | 'center' | 'right';
}

const StyledText = styled.pre.attrs<TextProps>((p: TextProps) => ({
  className: classnames(classes.root, {
    [classes.left]: p.align === 'left',
    [classes.center]: p.align === 'center',
    [classes.right]: p.align === 'right',
  }),
}))<TextProps>``;

export const Text: React.FC<TextProps> = (p) => {
  return <StyledText {...p} />;
};
