import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0" >
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Can i collaborate wit MintChi if i live outside Chicago?",
    answer: "Yes! while Mint-Chi was started in Chicago, we are also open to virtual and non-local collaborations! ",
  },
  {
    question: "I am intersted in a collaboration, but i dont have enough info on Nfts",
    answer:
    "Mint-Chi welcomes collaborations from all knowlledge levels and backgrounds, we work at your own pace and support you during every proccess! Please reach out to us to fill knowledge gaps",
  },
  {
    question: "Does Mint-Chi own the rights to my assets after they are minted?",
    answer: "No! the rights to minted assets are reserved by the owner of the assets ",
  },
  {
    question: "How long does it take to convert my art or asset into an Nft?",
    answer: "Depending on the specific usecase, we can have your custom smart contracts ready and assets minted as fast as 48 hours! ",
  },
  {
    question: "How complicated are Nfts to understand?",
    answer: "If you understand commuting around the loop area, understanding Nfts will be a breeze!",
  },
  // {
  //   question: "how long does it take to convert my art or asset into an Nft?",
  //   answer: "Depending on the specific usecase, we can have your assets minted as fast as 48 hours! ",
  // },
  // {
  //   question: "What are the pricing models ",
  //   answer:
  //     "Depending on your specific usecase, we offer two pricing models. ",
  // },
  {
    question: "Do you offer technical support? ",
    answer:
      "yes, we offer technical support to our collaborators",
  },
];
