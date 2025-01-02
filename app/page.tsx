import Hero from '@/components/common/Hero';
import Projects from '@/components/common/Projects';

export default function Home() {
  return (
    <main className="bg-background space-y-8">
      <Hero />
      <Projects />
    </main>
  );
}
