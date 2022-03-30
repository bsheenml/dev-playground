/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Axios from 'axios'

import Admin from "layouts/Admin.js";

import AdminNavbar from "components/Navbars/IndexNavbar.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Dashboard from "./admin/technologies";
import Tables from "./admin/tables";
import Tutorials from "./admin/tutorials";
import Admin2 from "layouts/Admin2";
import Admin3 from "layouts/Admin3";
import HomeNavBar from "components/Navbars/HomeNavBar";

export default function Index() {
  return (
    <>  
    <HomeNavBar></HomeNavBar>
      <section className="header relative pt-16 items-center m-6 flex p-4 item-start h-screen max-h-860-px">
        <div className="container mx-auto items-right flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Hi! My name is Brendan
                and I'm passionate about technology. 
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
               This is my development playgorund.  {" "}
                <a
                  href="#"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                
              </p>
              <div className="mt-12">
                <a
                  href="#"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Let's collaborate!
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-24 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      
      <Footer />
    </>
    
  )
}

Index.layout = Admin3;

export const getServerSideProps = async () => {
  const res = await Axios.get(`https://api.hubapi.com/cms/v3/hubdb/tables/5360731/rows?hapikey=${process.env.API_KEY}`);
  const posts = await res.data;
  const post = posts.total;
  JSON.stringify(posts);
  console.log(posts);
  console.log(post);

  return {
    props: {
      posts,
    },
  };
};
