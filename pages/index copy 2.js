/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Axios from 'axios'

import Admin from "layouts/Admin.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Dashboard from "./admin/dashboard";

export default function Index() {
  return (
    <>
    <Dashboard/>
    </>
    
  )
}

Index.layout = Admin;

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
