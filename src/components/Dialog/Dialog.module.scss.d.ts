export type Styles = {
  backdrop: string;
  close: string;
  open: string;
  paper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
