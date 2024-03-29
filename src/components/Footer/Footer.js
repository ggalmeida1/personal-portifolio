import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://wa.link/jnqfr9">WhatsApp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:galmeida.gab@gmail.com">
            galmeida.gab@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021 <Link href="https://www.almeidadeveloper.com">  Almeida Dev</Link>. 
            Do you want to see the code for this website?  
                <LinkItem href="https://https://github.com/ggalmeida1/personal-portifolio">Check it here.</LinkItem>  </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ggalmeida1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ggalmeida/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
