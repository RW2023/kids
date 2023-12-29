import React from 'react';
import SubHeading from '@/components/ui/SubHeading';
import Link from 'next/link';
import HomeHeading from '@/components/ui/HomeHeading';
import HomeSubHeading from '@/components/ui/HomeSubHeading';

const HomePage = () => {
  return (
    <>
      <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/img/boyVids.png)',
      }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-auto">
            <HomeHeading title="Chore tracker" />
            {/* <HomeSubHeading title='"I will pull my weight!"' /> */}
            <HomeSubHeading
              title=" chores manager"
              iconClass="fas fa-cogs"
            />
            <Link href={'/login'}>
              <button
                type="button"
                aria-label="get started button"
                className="btn  bg-button text-black border-black hover:text-button hover:bg-base-300 rounded-md"
              >
                Login to your personalized dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto">
          <SubHeading title="Features" iconClass="fas fa-star" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
            <div className="card bg-base-300 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">Organize Tasks</h2>
                <p>
                  <i className="fas fa-clipboard-list mr-2"></i>Efficiently
                  categorize and track your household chores.
                </p>
                <p>
                  <i className="fas fa-weight-hanging mr-2"></i>See who is
                  pulling their weight and who is slacking!
                </p>
              </div>
            </div>

            <div className="card bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Set Reminders and Notification</h2>
                <p>
                  <i className="fas fa-bell mr-2"></i>No more nagging! Set
                  reminders and notifications to keep everyone on track.
                </p>
                <p>
                  <i className="fas fa-bell mr-2"></i>Get notified when tasks
                  are completed.
                </p>
              </div>
            </div>

            <div className="card bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Collaborate</h2>
                <p>
                  <i className="fas fa-user-plus mr-2"></i>Add and update users
                  and chores
                </p>
                <p>
                  <i className="fas fa-user-friends mr-2"></i>Invite all family
                  members to collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-12 m-5">
        <div className="container mx-auto text-center">
          <SubHeading
            title="Why Choose ChoreMaster?"
            iconClass="fas fa-question-circle"
          />

          <p className="max-w-lg mx-auto text-xl sm:p-2">
            Chore Tracker is designed to root out slackers. It is a simple and
            easy to use chore tracker that allows you to track who is pulling
            their weight and who is slacking. It is designed to be used by the
            whole family. It is a great way to teach kids about responsibility
            and accountability.{' '}
          </p>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto text-center">
          <Link href={'/about'} aria-label="learn more about Chore Tracker">
            <button
              type="button"
              aria-label="learn more"
              className="btn  bg-button text-black border-black hover:text-button hover:bg-base-300 rounded-md"
            >
              Learn More about Chore Tracker
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
