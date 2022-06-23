import Image from "next/image";
import React from "react";
import Container from "./container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";



import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Team() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2">

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name="Jide Abati"
              title="Blockchain Software Developer"
            />

          <div  className="mb-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    {/* <span>Learn More</span> */}
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    
                    <p className="text-2xl leading-normal ">
                      <Mark>About:</Mark>
                      that hits some of your benefits from one of your popular customer.
                    </p>
                    <br/>
                      phone:
                      <br/>
                      email:
                    {/* </span> */}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            
            <Avatar
              image={userTwoImg}
              name="Osborn Ojure"
              title="Web3 and Smart Contract Developer"
            />
  <div  className="mb-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>Learn More</span>
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  <p className="text-2xl leading-normal ">
                      <Mark>About:</Mark>
                       software programmer focused on developing tools and decentalized apps that improve the adoption and useability of blockchaain
                    </p>
                    <br/>
                      phone: 2172883157
                      <br/>
                      email: jozizuke@gmail.com
                    {/* </span> */}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          

          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            
            <Avatar
              image={userTwoImg}
              name="Jean Fred"
              title="UI Developer and Project Cordinator"
            />

<div  className="mb-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>Learn More</span>
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-2 pb-2 text-gray-500 dark:text-gray-300">
                  <p className="text-2xl leading-normal ">
                      <Mark>About:</Mark>
                      that hits some of your benefits from one of your popular customer.
                    </p>
                    <br/>
                      phone:
                      <br/>
                      email:
                    {/* </span> */}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            
            <Avatar
              image={userThreeImg}
              name="Nathan Dejene"
              title="Film Photographer and Collaborations Cordinator"
            />

<div  className="mb-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>Learn More</span>
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-2 pb-2 text-gray-500 dark:text-gray-300">
                  <p className="text-2xl leading-normal ">
                      <Mark>About:</Mark>
                      that hits some of your benefits from one of your popular customer.
                    </p>
                    <br/>
                      phone:
                      <br/>
                      email:
                    {/* </span> */}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink overflow-hidden rounded-full w-20 h-25">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
