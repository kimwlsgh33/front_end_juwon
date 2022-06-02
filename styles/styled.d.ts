import "styled-components";

// styled-components 모듈 내부에, DefaultTheme 정의하기
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      color: string;
      background: string;
    };
  }
}
