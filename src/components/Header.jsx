import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='' />
                <Button>Try It Free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti aliquam, laboriosam odit quae earum! Dolorum non itaque ipsa aut similique consectetur ipsam facilis hic necessitatibus.</p>
                    <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
                </div>

                <Image src='./images/illustration-mockups.svg' alt='' />
            </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header