export type Styles = {
  alignCenter: string;
  alignEnd: string;
  alignStart: string;
  bordered: string;
  fullHeight: string;
  fullWidth: string;
  justifyAround: string;
  justifyBetween: string;
  justifyCenter: string;
  justifyEnd: string;
  justifyStart: string;
  root: string;
  rounded: string;
  row: string;
  wrap: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
