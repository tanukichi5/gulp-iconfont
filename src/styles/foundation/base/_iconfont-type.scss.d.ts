export type Styles = {
  arrow_left: string;
  arrow_right: string;
  search: string;
  user: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
