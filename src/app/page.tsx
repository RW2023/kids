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
          backgroundImage: 'url(/img/kids3.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <HomeHeading title="Chore tracker" iconClass="fas fa-home" />
            <HomeSubHeading
              title='"I will pull my weight!"'            />
            <HomeSubHeading
              title="you can only track what you measure" iconClass='fas fa-chart-bar'
            />
            <Link href={'/login'}>
              <button
                type="button"
                aria-label="get started button"
                className="btn  bg-button text-buttonText border-black hover:text-button hover:bg-buttonText rounded-md"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto">
          <SubHeading title="Features" iconClass="fas fa-star" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
            <div className="card bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Organize Tasks</h2>
                <p>Efficiently categorize and track your household chores.</p>
              </div>
            </div>

            <div className="card bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Set Reminders</h2>
                <p>
                  Never forget a task with timely reminders and notifications.
                </p>
              </div>
            </div>

            <div className="card bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Collaborate</h2>
                <p>
                  Share tasks and collaborate with family members for a
                  well-managed home.
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

          <p className="max-w-lg mx-auto">
            ChoreMaster is designed to bring harmony and efficiency to your
            household chores. With our easy-to-use interface and powerful
            features, managing daily tasks has never been easier.
          </p>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto text-center">
          <Link href={'/about'}>
            <button
              type="button"
              className="btn  bg-button text-buttonText border-black hover:text-button hover:bg-buttonText rounded-md"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
