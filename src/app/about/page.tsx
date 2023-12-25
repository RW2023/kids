//src/app/about/page.tsx
'use client';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import kidsImage from '../../../public/img/kids2.jpg';

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    const updateAnimation = () => {
      if (window.scrollY > 0) {
        controls.start('show');
      } else {
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', updateAnimation);
    return () => window.removeEventListener('scroll', updateAnimation);
  }, [controls]);

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <>
      <head>
        <title>About | Chore Tracker</title>
        <meta name="description" content="Kids Chores App" />
      </head>
      <div
        className="bg-base-200 min-h-screen"
        style={{
          backgroundImage: `url(${kidsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {' '}
        <div className="container mx-auto p-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInVariants}
          >
            <Heading title="About chore tracker" iconClass="fas fa-info" />
            <SubHeading
              title="you can only track what you measure"
              iconClass="fas fa-chart-bar"
            />{' '}
          </motion.div>

          <div className="flex flex-col justify-center items-center m-1 mb-5">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={slideInVariants}
              className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2"
            >
              {/* Add your content here */}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border">
              {' '}
              <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg ">
                {' '}
                <div className="card-body text-xl">
                  <SubHeading
                    title="Track Chores and Tasks"
                    iconClass="fas fa-tasks"
                  />{' '}
                  <p className="bg-base-200 rounded p-2 flex items-center text-left border">
                    {' '}
                    Track the chores and tasks your kids are doing. Reward them
                    with points and prizes.
                  </p>
                  <br />
                  <ul>
                    <li className="flex items-center">
                      <i className="fas fa-clipboard-list mr-2"></i>
                      See who is actually doing what
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-chart-bar mr-2"></i>
                      Track progress
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-bullseye mr-2"></i>
                      Set goals
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-gift mr-2"></i>
                      Set rewards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border">
              <div className="card bg-base-300 shadow-xl mb-6 glass w-auto mx-auto text-lg ">
                <div className="card-body">
                  <SubHeading
                    title="Gamify Chores"
                    iconClass="fas fa-clipboard-list mr-2"
                  />

                  <p className="bg-base-200 rounded p-2 flex items-center text-left border">
                    Make chores and tasks exciting by gamifying them to engage
                    your kids.. Reward them with points and prizes
                  </p>
                  <ul>
                    <li className="flex items-center">
                      <i className="fas fa-trophy mr-2"></i>
                      Reward Achievements
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-medal mr-2"></i>
                      Earn Badges
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-flag-checkered mr-2"></i>
                      Complete Challenges
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border">
              <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg w-auto">
                <div className="card-body">
                  <SubHeading
                    title="Track and Display Progress"
                    iconClass="fas fa-chart-line"
                  />

                  <p className="bg-base-200 rounded p-2 flex items-center text-left border">
                    Our app introduces an interactive way to track chores and
                    milestones, using engaging visual cues that add a layer of
                    fun and motivation. By visualizing progress, users can
                    easily see how close they are to completing their daily or
                    weekly tasks, encouraging a sense of accomplishment and
                    productivity.
                  </p>
                  <SubHeading
                    title="Visualize Milestones"
                    iconClass="fas fa-flag-checkered"
                  />
                  <p className="bg-base-200 rounded p-2 flex items-center text-left border">
                    As users advance in completing tasks, our dynamic progress
                    bar visually represents their journey towards their goals.
                    This not only serves as a reminder of how much they have
                    achieved but also motivates them to reach the finish line.
                  </p>
                  <progress
                    className="progress progress-success w-56"
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>

            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border">
              <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg w-auto">
                <div className="card-body">
                  <SubHeading
                    title="Simplifying Daily Tasks"
                    iconClass="fas fa-broom"
                  />
                  <p className="bg-base-200 rounded p-2 flex items-center text-left border">                    Just measuring is the start. You probably don&apos;t have
                    any grasp on who is doing what exactly if you have multiple
                    teenagers. Chore Tracker is a practical tool that helps with
                    that process. Household responsibilities can be defined and
                    broken down into sub tasks. Our app feature have been
                    thoughtfully designed to make managing chores for kids
                    easier and more enjoyable. Improving the chores
                    &quot;situation&quot; in your home is the goal.
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SubHeading title="technologies" iconClass="fas fa-tools" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border w-full">
              <div className="card bg-base-300 shadow-xl mb-6 glass text-lg place-items-center w-full mx-auto">
                <div className="card-body">
                  <SubHeading
                    title="User-Friendly Design"
                    iconClass="fas fa-user-friends"
                  />
                  <ul className="list-disc pl-5 bg-base-200 rounded p-2 border">
                    <li>
                      <i className="fab fa-react"></i> Intuitive React
                      Interfaces
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i> Responsive Mobile
                      Design
                    </li>
                    <li>
                      <i className="fas fa-paint-brush"></i> Engaging Aesthetics
                      with Tailwind CSS
                    </li>
                    <li>
                      <i className="fas fa-magic"></i> Smooth Animations with
                      Framer Motion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-base-300 p-5 rounded-md drop-shadow-md border w-full">
              <div className="card bg-base-300 shadow-xl mb-6 glass text-lg place-items-center w-full mx-auto">
                <div className="card-body">
                  <SubHeading title="Robust Back-End" iconClass="fas fa-cogs" />
                  <ul className="list-disc pl-5 bg-base-200 rounded p-2 border">
                    <li>
                      <i className="fas fa-sync-alt"></i> Efficient Data
                      Synchronization
                    </li>
                    <li>
                      <i className="fas fa-cloud-upload-alt"></i> Cloud-Based
                      Solutions
                    </li>
                    <li>
                      <i className="fas fa-database"></i> Scalable Database
                      Management with MongoDB
                    </li>
                    <li>
                      <i className="fab fa-git-alt"></i> Version Control with
                      Git & GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
