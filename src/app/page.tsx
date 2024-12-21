import AboutSection from "./About/page";
import ContactSection from "./Contact/page";
import Footer from "./Footer/page";
import Hero from "./Herosec/page";
import ProjectsSection from "./Projects/page";
import Skills from "./Skills/page";

export default function Home(){
  return(
    <div>
<Hero/>
<AboutSection/>
<Skills/>
<ProjectsSection/>
<ContactSection/>
<Footer/>
    </div>
  )
}