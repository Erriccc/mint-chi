import Image from "next/image";
import Link from 'next/link';
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";



function MediumCard({ img, title, link , details}) {
  return (
    <div className="cursor-pointer mx-7 hover:scale-105 transform transition duration-300 ease-out" >
      <div className="relative h-40 w-60">
          {/* <a> */}

        {/* </a> */}
        <Link href={link}>
               {/* User Profile */}
        <Image src={img} layout="fill" className="rounded-xl" />

              </Link>
      </div>
      {/* <h3 className="text-l mt-3">{title}</h3>
       */}
        <div className="text-gray-600 w-full flex justify-center p-2 m-1 dark:text-gray-400">{title}</div>
        <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>tap image</span>
                    <ChevronUpIcon
                      className={`
                      ${
                        !open ? "transform rotate-180" : ""
                      } 
                      w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-2 pb-2 text-gray-500 dark:text-gray-300">
                  <p className="text-sm leading-normal ">
                      {details}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

    </div>
  );
}

export default MediumCard;