import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <header>
        {/* <nav>
        <ul>
            <li>
              <Link to="/">00 Home</Link>
            </li>
            <li>
              <Link to="/">01 Destination</Link>
            </li>
            <li>
              <Link to="/">02 Crew</Link>
            </li>
            <li>
              <Link to="/">03 Technology</Link>
            </li>
          </ul>
        </nav> */}
        HEADER
      </header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
