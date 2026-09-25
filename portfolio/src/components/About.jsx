import MagicBento from './MagicBento';
import SkydiverScene from './SkydiverScene';
import './About.css';

const cards = [
  {
    id: 'skydiving',
    size: 'large',
    render: () => (
      <>
        <SkydiverScene />
        <div className="magic-bento-card__content magic-bento-card__content--scrim">
          <div className="magic-bento-card__label">Skydiving</div>
          <p className="magic-bento-card__description">
            Jumped out of a perfectly good airplane. Would absolutely do it again.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'ra',
    size: 'tall',
    label: 'Resident Assistant',
    description: 'Part community-builder, part conflict-mediator, full-time fire-alarm survivor.',
  },
  {
    id: 'pitchrank',
    size: 'tall',
    label: 'Side Project',
    description: "Built an AI that roasts your pitch-practice sessions through a “boss character.” Turns out robots can be savage too.",
  },
  {
    id: 'piano',
    label: 'Piano',
    description: '13 years in. Faster at scales than at LeetCode, most days.',
  },
  {
    id: 'soccer',
    label: 'Soccer',
    description: "Died-in-the-wool fan. Come with an opinion on the best midfielder — I have several.",
  },
  {
    id: 'hobbies',
    size: 'wide',
    label: 'Also Into',
    description: 'Movies, music, and an unreasonable amount of coffee.',
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="about-section">
      <h2 id="about-heading" className="about-heading">
        About Me
      </h2>
      <MagicBento cards={cards} />
    </section>
  );
};

export default About;
