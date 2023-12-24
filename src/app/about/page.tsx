//src/app/about/page.tsx
'use client';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
      <div className="bg-base-200 min-h-screen">
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
            <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg border">
              <div className="card-body text-xl">
                <SubHeading
                  title="Track Chores and Tasks"
                  iconClass="fas fa-tasks"
                />{' '}
                <p>
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
            <div className="card bg-base-300 shadow-xl mb-6 glass w-auto mx-auto text-lg ">
              <div className="card-body">
                <SubHeading
                  title="Gamify Chores"
                  iconClass="fas fa-clipboard-list mr-2"
                />
                <p>
                  Make chores and tasks exciting by gamifying them to engage
                  your kids.
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
            <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg  w-auto">
              <div className="card-body">
                <div className="card-title">
                  <SubHeading
                    title="Track and display progress"
                    iconClass="fas fa-chart-line"
                  />{' '}
                </div>
                <p>
                  Display progress with visual ques adding to engagement and
                  motivation.
                </p>
                <SubHeading
                  title="Let them know they are almost there"
                  iconClass="fas fa-flag-checkered"
                />{' '}
                <progress
                  className="progress progress-success w-56"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg w-auto">
              <div className="card-body">
                <SubHeading
                  title="Simplifying Daily Tasks"
                  iconClass="fas fa-broom"
                />
                <p>
                  Our chores app is designed to transform the way you manage
                  household tasks. It&apos;s not just an application; it&apos;s
                  a tool that brings efficiency and simplicity to your daily
                  routine. Each feature in this app has been carefully crafted
                  to make the often mundane and overlooked aspects of household
                  management enjoyable and intuitive. Our commitment to
                  improving your daily life is reflected in every part of the
                  app, from the interactive task lists to the personalized
                  reminders. As we continue to refine and enhance our app, we
                  remain dedicated to empowering users with a seamless
                  experience for managing their chores. This app is more than a
                  utility; it&apos;s a dynamic platform evolving with your
                  household needs.
                </p>
              </div>
            </div>
          </div>

          <SubHeading title="Our Expertise" iconClass="fas fa-tools" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
            <div className="card bg-base-300 shadow-xl mb-6 glass text-lg place-items-center w-full mx-auto">
              <div className="card-body">
                <SubHeading
                  title="User-Friendly Design"
                  iconClass="fas fa-user-friends"
                />
                <ul className="list-disc pl-5">
                  <li>
                    <i className="fab fa-react"></i> Intuitive React Interfaces
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
            <div className="card bg-base-300 shadow-xl mb-6 glass text-lg place-items-center w-full mx-auto">
              <div className="card-body">
                <SubHeading title="Robust Back-End" iconClass="fas fa-cogs" />
                <ul className="list-disc pl-5">
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
                    <i className="fab fa-git-alt"></i> Version Control with Git
                    & GitHub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}