'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T6oSw51T3k0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  FaUserCheck,
  FaBullhorn,
  FaEnvelope,
  FaChartBar,
  FaHandshake,
  FaNewspaper,
  FaShoppingCart,
  FaAward,
  FaUsers,
} from 'react-icons/fa';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Hero from '@/components/hero';
import Balancer from 'react-wrap-balancer';
import MagicHoverCard from '@/components/magicalcard';

const Contactus = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Let's Build Your MVP
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              If you've already demonstrated demand for your product, we'd love
              to hear from you. Fill out the form below and one of our team
              members will be in touch to discuss your project.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="max-w-lg flex-1"
              />
              <Input
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1"
              />
              <Textarea
                placeholder="Tell us about your project"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const Conditions = () => {
  const conditions = [
    {
      title: 'Beta Tester Engagement',
      description:
        'Recruit a significant number of beta testers and gather their feedback to demonstrate interest and potential user base.',
      icon: <FaUserCheck />,
    },
    {
      title: 'Social Media Campaign',
      description:
        'Launch a social media campaign to create buzz and attract a large following, indicating strong interest in your product.',
      icon: <FaBullhorn />,
    },
    {
      title: 'Email List Growth',
      description:
        'Build a large email list of potential customers who have expressed interest in your product.',
      icon: <FaEnvelope />,
    },
    {
      title: 'Market Research Surveys',
      description:
        'Conduct comprehensive market research surveys that show a high level of interest and demand for your product.',
      icon: <FaChartBar />,
    },
    {
      title: 'Partnerships and Collaborations',
      description:
        'Secure partnerships or collaborations with established brands or influencers that validate market demand through their endorsement.',
      icon: <FaHandshake />,
    },
    {
      title: 'Press Coverage',
      description:
        'Obtain media coverage in relevant industry publications to highlight interest and credibility.',
      icon: <FaNewspaper />,
    },
    {
      title: 'Pre-Order Sales',
      description:
        'Accept pre-order sales for your product, demonstrating a commitment from customers willing to pay before the product is launched.',
      icon: <FaShoppingCart />,
    },
    {
      title: 'Industry Awards or Recognition',
      description:
        'Receive awards or recognition from industry organizations, showcasing market interest and potential.',
      icon: <FaAward />,
    },
    {
      title: 'Community Building',
      description:
        'Develop an active and engaged community around your product idea, showing a dedicated and interested user base.',
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Qualify for a Free MVP
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <Balancer>Demonstrate Demand, Get an MVP</Balancer>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              To qualify for a free MVP from our agency, you'll need to
              demonstrate sufficient demand for your product through a
              pre-launch campaign or a successful crowdfunding effort. This
              shows us that there's real interest in your idea, and we're happy
              to help bring it to life.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl group items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          id="cards-container"
        >
          {conditions.map((condition, index) => (
            <MagicHoverCard key={index}>
              <div className="flex text-center p-4 items-center flex-col justify-center space-y-4">
                <div className="flex flex-col  text-center items-center">
                  <div>{condition.icon}</div>
                  <h3 className="text-xl font-bold">{condition.title}</h3>
                  <p className="text-muted-foreground">
                    {condition.description}
                  </p>
                </div>
              </div>
            </MagicHoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proccess = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              MVP Building Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How We Build Your MVP
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our proven process ensures you get a high-quality MVP that meets
              your business needs and resonates with your target customers.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Validate Your Idea</h3>
                <p className="text-muted-foreground">
                  We work with you to validate your business idea and ensure
                  there is sufficient market demand before building your MVP.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                <p className="text-muted-foreground">
                  Our team of designers and developers will quickly build a
                  functional prototype to test with your target customers.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Iterative Development</h3>
                <p className="text-muted-foreground">
                  We'll work closely with you to gather feedback and
                  continuously improve your MVP until it's ready for launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Acme MVP Agency. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center space-x-4 justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="">Misty Studios</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Hero />
        <Conditions />
        <Proccess />
        <Contactus />
      </main>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
