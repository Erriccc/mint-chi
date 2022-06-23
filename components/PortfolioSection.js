import { useState } from "react";
import Container from "./container";
import SectionTitle from "../components/sectionTitle";
import MediumCard from "../components/MediumCard";

import map3Icon from "../public/img/illustrations/undraw_my_current_location_re_whmt.svg";
import map3PayIcon from "../public/img/illustrations/undraw_mobile_pay_re_sjb8.svg";
import map3ProfilesIcon from "../public/img/illustrations/undraw_connecting_teams_re_hno7.svg";
import map3DashboardIcon from "../public/img/illustrations/undraw_dashboard_re_3b76.svg";
import fanTicketIcon from "../public/img/illustrations/undraw_game_day_ucx9.svg";
import NFABlogIcon from "../public/img/illustrations/undraw_blogging_re_kl0d.svg";



export default function PortfolioSection() {
  const [playVideo, setPlayVideo] = useState(false);

  const ProjectData = [
  
    {
      projectName: "Map3.0",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: map3Icon,
      description: "Map3.0 is a geographical representation of map3 vendors. Map3.0 connects cryptocurrency users with real world crypto friendly vendors around them"
  
    },
    {
      projectName: "Map3Pay",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: map3PayIcon,
      description: "Map3Pay is a blockchain native open payment gateway that lets users on both sides of a payment decide what cryptocurrency they prefer while it takes care of all the necessary swaps and transfers behind the scenes. As a payment system, Map3Pay takes a unique approach  an efficient flexible payment system that"
  
  },
    {
      projectName: "Map3Profiles",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: map3ProfilesIcon,
      description: "Map 3 provides premium dedicated profiles for vendors or frequent private users. Map3 Vendor Profiles are technically non fungible tokens minted when a user signs up to become a vendor. Map3 vendors provide an ecosystem of users and vendors transacting between different tokens and assets in an easy and efficient way"
  
    },
    {
      projectName: "Nft Collections",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: "https://links.papareact.com/8ix",
      description: "Nft collection for client "
  
    },
    {
      projectName: "Map3Dashboard",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: map3DashboardIcon,
      description: "Map3 Protocol is a project that primarily aims to improve peer to peer transfer of Erc20 cryptocurrencies on EVM compatible blockchains"
  
    },
    {
      projectName: "Fan Ticket Nft collection (testnet)",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: fanTicketIcon,
      description: "Nft collection for Nba fans that rewards fan loyalty"
  
    },
    {
      projectName: "Chicago in Film",
      projectLink: "https://github.com/Erriccc/MAP3.0",
      url: "https://links.papareact.com/q7j",
      description: "Chicago in Film is a project that highlights the uniqueness of chicagos skyline in film photography."
  
    },
    
    
    {
      projectName: "NFA Blogs",
      projectLink: "https://medium.com/@NFAblog",
      url: NFABlogIcon,
      description: "a blog dedicated to educating readers about abstract blokchain concepts and ideas "
  
    }
  
  ]
  

  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">




    <section>
          {/* <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2> */}

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {ProjectData.map((project, index) => (
              <div>
              <MediumCard key={index} link={project.projectLink}img={project.url} title={project.projectName} details={project.description} />
              {/* <SectionTitle 
              pretitle={project.description} 
              // title={project.description}
              /> */}
              </div>
              // console.log(i, project)
            ))}
          </div>
        </section>



        {/* <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-blue-400">
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube-nocookie.com/embed/9JFhL8WBPpg?controls=0&autoplay=1" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          )}
          
        </div>
        <SectionTitle 
              // pretitle="FAQ" 
              title="video description"
              /> */}
      </div>
    </Container>
  );
}


{/* <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section> */}