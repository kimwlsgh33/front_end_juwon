// 내가 정의내린 테마 형식 불러오기
import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: ${(props) => props.theme.colors.background};
      user-select: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box; 
    }
`;

export const darkTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    color: "cyan",
    background: "magenta",
    primary: "yellow",
    secondary: "green",
  },
};

export const lightTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    color: "black",
    background: "tomato",
    primary: "yellow",
    secondary: "green",
  },
};
