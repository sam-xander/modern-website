import Carousel from "./Carousel";
import FadeInSection from "./FadeIn";

function Mission() {
  return (
    <div className="mission max-width">
      <div>
        <FadeInSection>
          <div className="mission__header">
            <h2>OUR MISSION</h2>
            <a className="link">LEARN MORE →</a>
          </div>
        </FadeInSection>
        <FadeInSection>
          <p>
            We believe in a world of limitless expression. A world that’s
            diverse and open to everyone! Seem’s like a dream world, huh? Well,
            what if we told you we’ve found the key to unlocking our collective
            potential. Join the mission by collaborating with a community of
            30,000+ members now.
          </p>
        </FadeInSection>
      </div>
      <FadeInSection>
        <Carousel />
      </FadeInSection>
    </div>
  );
}

export default Mission;
