import Link from 'next/link';
import BoxReveal from '../ui/box-reveal';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <>
      <section className="border-y-2 border-sky-500 py-5 px-3 flex justify-center">
        <BoxReveal boxColor={'black'}>
          <h2 className="text-2xl text-center">
            Web3 and Web2 Blockchain EVM-certified developer
          </h2>
        </BoxReveal>
      </section>
      <BoxReveal boxColor={'black'} duration={1.2}>
        <>
          <p className="text-xl text-justify py-5 px-3">
            With 2 years of experience, I focus on Web2 frontend development,
            integrating provided designs into functional websites, and Web3
            fullstack projects, building secure and scalable decentralized
            applications (DApps). I&apos;m passionate about bridging the gap
            between traditional web technologies and blockchain innovation, and
            I&apos;m always eager to learn and grow.
          </p>
          <div className="flex justify-center">
            <Link href="#contact" scroll={true}>
              <Button
                size="lg"
                variant={'link'}
                className="border border-sky-500 text-sky-500 text-lg hover:bg-sky-500 hover:text-black"
              >
                CONTACT
              </Button>
            </Link>
          </div>
        </>
      </BoxReveal>
    </>
  );
};

export default Hero;
