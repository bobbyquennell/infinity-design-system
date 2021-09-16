/**
 * Do not edit directly
 * Generated on Thu, 16 Sep 2021 13:21:08 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "base": {
      "gray": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "red": DesignToken,
      "green": DesignToken
    },
    "font": {
      "base": DesignToken,
      "secondary": DesignToken,
      "tertiary": DesignToken
    }
  }
}