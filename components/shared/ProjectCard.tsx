import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  name: string;
  technologies: string[];
  description: string;
};

const ProjectCard: React.FC<Props> = ({ name, technologies, description }) => {
  return (
    <Card className="sm:max-w-xs min-h-96 bg-black border-none flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle className="text-white text-lg">{name}</CardTitle>
          <CardDescription>
            <ul className="flex space-x-2">
              {technologies.map((technology, index) => (
                <li
                  key={index}
                  className="text-sm bg-sky-500 text-black px-2 py-1 rounded-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white">
          <p>{description}</p>
        </CardContent>
      </div>
      <CardFooter className="flex justify-end">
        <Link href={`/project/${name.toLowerCase()}`} scroll={true}>
          <Button
            variant={'link'}
            className="border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-black"
          >
            view project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
