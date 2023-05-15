export type Styles = {
  bordered: string;
  button: string;
  disabled: string;
  fullHeight: string;
  fullWidth: string;
  info: string;
  large: string;
  loading: string;
  primary: string;
  rounded: string;
  secondary: string;
  small: string;
  spin: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
