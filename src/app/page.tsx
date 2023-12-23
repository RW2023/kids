import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage: 'url(/img/kids.jpg)',
      // }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Heading title="Kids Chores" iconClass="fas fa-child" />
          <SubHeading
            title="track your kids chores"
            iconClass="fas fa-tasks"
          />{' '}
          <button type="button" aria-label="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
