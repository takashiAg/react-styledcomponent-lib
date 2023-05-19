export type Styles = {
  center: string;
  error: string;
  left: string;
  right: string;
  root: string;
  warning: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
