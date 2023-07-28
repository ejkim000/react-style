import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>
                            111 Gold St. <br />
                            Heaven, UN 00000
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2023 Huddle. All right reserved.</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer