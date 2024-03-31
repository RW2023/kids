import { FC, ReactNode } from 'react';

interface HeroProps {
  img: string; // The path to the background image
  children: ReactNode; // The content to display on top of the image
}

const Hero: FC<HeroProps> = ({ img, children }) => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`, // Dynamic background image
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-10" />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Hero;
