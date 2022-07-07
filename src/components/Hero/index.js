import style from './style.module.scss';
import background from './background.jpg';

const Hero = () => (
  <div className={style.hero}>
    <img className="img-fluid" src={background} alt="Earth from ISS" />
  </div>
);

export default Hero;
