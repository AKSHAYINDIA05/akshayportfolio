import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         Welcome to <br/>
         My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Web Developer and a Data Scientist. I develop Web Pages using HTML, CSS, JAVSCRIPT.
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;