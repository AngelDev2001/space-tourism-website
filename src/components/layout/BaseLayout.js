import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

export const BaseLayout = ({children}) => {
    return (

        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;