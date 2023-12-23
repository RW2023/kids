import React from 'react';
import SubHeading from '@/components/ui/SubHeading'; 
import Link from 'next/link';


const HomePage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to ChoreMaster!</h1>
            <p className="py-6">
              Making household management effortless and fun.
            </p>
            <Link href={"/login"}>
            <button type='button' aria-label='Login' className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto">
          <SubHeading title="Features" iconClass="fas fa-star" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      <div className="bg-base-200 py-12">
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
          <Link
          href={'/about'}>
          <button type='button' className="btn btn-secondary">Learn More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
