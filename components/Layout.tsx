import { FC } from "react";
import { useToggleTheme } from "../contexts";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const ChangeThemeBtn = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isDark, toggleTheme } = useToggleTheme();
  return (
    <Container>
      <NavBar>
        <ChangeThemeBtn onClick={toggleTheme}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </ChangeThemeBtn>
      </NavBar>
      {children}
    </Container>
  );
};

export default Layout;
