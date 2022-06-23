import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import PortfolioSection from "../components/PortfolioSection";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Team from "../components/Team";
import Cta from "../components/cta";
import Faq from "../components/faq";
import ContactForm from "../components/ContactForm";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Team = dynamic(() => import("../components/Team"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));


const videoSrcs = [
  "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
  "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
  "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
  "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
  "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1"

]

const ProjectData = [
  
  {
    projectName: "Map3.0",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Map3 Protocol is a project that primarily aims to improve peer to peer transfer of Erc20 cryptocurrencies on EVM compatible blockchains. Map3.0 is a geographical representation of map3 vendors. Map3.0 connects cryptocurrency users with real world crypto friendly vendors around them"

  },
  {
    projectName: "Map3Pay",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Map3 Protocol is a project that primarily aims to improve peer to peer transfer of Erc20 cryptocurrencies on EVM compatible blockchains. Map3Pay is a blockchain native open payment gateway that lets users on both sides of a payment decide what cryptocurrency they prefer while it takes care of all the necessary swaps and transfers behind the scenes. As a payment system, Map3Pay takes a unique approach  an efficient flexible payment system that"

},
  {
    projectName: "Map3Profiles",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Map3 Protocol is a project that primarily aims to improve peer to peer transfer of Erc20 cryptocurrencies on EVM compatible blockchains. Map 3 provides premium dedicated profiles for vendors or frequent private users. Map3 Vendor Profiles are technically non fungible tokens minted when a user signs up to become a vendor. Map3 vendors provide an ecosystem of users and vendors transacting between different tokens and assets in an easy and efficient way"

  },
  {
    projectName: "Map3Dashboard",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Map3 Protocol is a project that primarily aims to improve peer to peer transfer of Erc20 cryptocurrencies on EVM compatible blockchains"

  },
  {
    projectName: "Fan Ticket Nft collection (testnet)",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Nft collection for Nba fans that rewards fan loyalty"

  },
  {
    projectName: "Chicago in Film",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Chicago in Film is a project that highlights the uniqueness of chicagos skyline in film photography."

  },
  {
    projectName: "Nft Collections",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "Nft collection for client "

  },
  {
    projectName: "NFA Blog",
    url: "https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1",
    description: "a blog dedicated to educating readers about abstract blokchain concepts and ideas "

  }

]




export default function Home() {
  return (
    <>
      <Head>
        <title>MintChi is a chicago based platform that helps users convert their assets into NFTS</title>
        <meta
          name="description"
          content="MintChi is a chicago based platform that helps users convert their assets into NFTS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
      // additional pre tittle
        // pretitle="MintChi "
        title=" Why should you collaborate with us?" >
          <span className="text-gray-500 leading-loose">
          Understanding the proccess and advantages of converting your assets to Nfts can be very daunting and time consuming.
         By partnering With MintChi, You are effectively investing in your time by hiring a fully cappable team to support you every step of the way!
          </span>
        
      </SectionTitle>
      <SectionTitle
        // pretitle="Services"
        title="What we Offer"
        >
        {/* We hope to work with you soon! */}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits  data={benefitThree} />
      <SectionTitle
        pretitle="What projects have we worked on lately?"
        // title=" What projects have we worked on lately?"
        >
        {/* These are some of the projects that our team mebers have worked on. */}
      </SectionTitle>
      {/* Add curasel from papa react here */}
      <PortfolioSection />
      <SectionTitle
        // pretitle="Team"
        title="Meet Your Team!">
        We hope we get the chance to work with you!
      </SectionTitle>
      <Team />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Reach out to us with new questions, we respond fast!
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <ContactForm />
    </>
  );
}
