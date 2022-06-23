import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  // music-note,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/illustrations/undraw_add_information_j2wg.svg";
// import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/illustrations/undraw_design_tools_-42-tf.svg";
import benefitThreeImg from "../public/img/illustrations/undraw_both_sides_hbv3.svg";

// import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Free onboarding sessions",
  desc: "We enjoy working with folks from different backgrounds! If you have just started getting into Nfts and Dont know where to begin, please reach out us to get you up to speed with currated recources that feet your need ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand the Why",
      desc: "We explain the different Usecases and Utilities and value that  nfts can bring to you",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Curious About Implementation strategies?",
      desc: "we share sucessfully executed cutting edge startegies that other nft collections have adopted",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Learn how you can stand out",
      desc: "Find out the little details that make the biggest difference",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Collaborations",
  desc: " Leverage our technical skills to bring your creative ideas to life and get to market faster",
  image: benefitTwoImg,
  bullets: [
    
    {
      title: "Zero risk collaborations",
      desc: "Reach out to us to find out how to get started for free",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Custom made Nft collections and smart contracts",
      desc: "Nfts is more than a Jpeg. By staying ahead of the pack and Using cutting edge tools, we collaborate to create custom solutions to suite your needs",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "All the way",
      desc: "We assist you all the way and beyond, so you never have to worry about technical roadblocks",
      icon: <SunIcon />,
    },
    {
      title: "smart contract auditing.",
      desc: "verify ownership, control and vulnerabilities  of your exisiting smart contract ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>,
    },
    {
      title: "Project Consultation",
      desc: " consult industry  professionals on cost effective blockchain solutions that capture value and attention for your project  ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>,
    },
  ],
};


const benefitThree = {
  title: "Varity of Assets to convert",
  desc: " These are some of the types of assets that you can convert to NFTs",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Music",
      desc: "Raise capital by providing incentives and value to your core fans in form of ownership of your music nfts  ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
    </svg>,
    },
    {
      title: "Traditional Art",
      desc: "Give your physical art super powers by extending its reach and flexibility through Nfts",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    },
    {
      title: "Murals and sculpted Art",
      desc: "Scan your  Murals and sculptures to convert them into digital versions and tokenized if needed",
      icon: <SunIcon />,
    },
    {
      title: "Tickets",
      desc: "Convert your game and event tickets to nfts ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>,
    },
    
  ],
};


export { benefitOne, benefitTwo, benefitThree };
