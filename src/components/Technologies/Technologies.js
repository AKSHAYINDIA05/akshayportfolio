import React from 'react';
import { DiAndroid, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>TECHNOLOGIES</SectionTitle>
    <SectionText>
      I've worked on various Technologies for back-end to design in the field of WEB DEVELOPMENT.
      I am also used to Python frameworks in the field of WEB DEVELOPMENT. I am also capable of analysing the Data using Python Packages.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer> 
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JAVASCRIPT in WEB DEVELOPMENT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer> 
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, PYTHON, MYSQL in WEB DEVELOPMENT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size='3rem' />
        <ListContainer> 
          <ListTitle>PROGRAMMING LANGUAGES</ListTitle>
          <ListParagraph>
            Experience with <br />
            C PROGRAMMING, PYTHON PROGRAMMING, JAVA PROGRAMMING
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
