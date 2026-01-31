import { Approach } from './sections/approach';
import { Contact } from './sections/contact';
import { Experience } from './sections/experience';
import { FAQ } from './sections/faq';
import { Footer } from './sections/footer';
import { Header } from './sections/header';
import { Hero } from './sections/hero';
import { Project } from './sections/project';
import { Skill } from './sections/skill';
import { TechStack } from './sections/tech-stack';
import { Testimonial } from './sections/testimonial';
import { WhyChooseMe } from './sections/why-choose-me';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Approach />
      <Skill />
      <TechStack />
      <WhyChooseMe />
      <Project />
      <Experience />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
