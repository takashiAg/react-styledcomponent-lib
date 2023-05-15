export type Styles = {
  Example: string;
  'Example--active': string;
  'Example--disabled': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
