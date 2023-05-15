import React from 'react';
import classes from './Spacer.module.scss';
import classnames from 'classnames';

interface SpacerProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const Spacer: React.FC<SpacerProps> = (p) => {
  return <span {...p} className={classnames(classes.spacer, p.className)} />;
};
