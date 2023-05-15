import React from 'react';
import classes from './Dialog.module.scss';
import classnames from 'classnames';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

export const Dialog: React.FC<DialogProps> = (p) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    p?.onClose?.();
  };
  const handlePaperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <div
      className={classnames(classes.backdrop, {
        [classes.open]: !!p?.open,
      })}
      onClick={handleClick}
    >
      <div className={classnames(classes.paper)} onClick={handlePaperClick}>
        {p?.children}
      </div>
    </div>
  );
};
