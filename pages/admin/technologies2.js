import React from "react";
import Axios from 'axios'

// components

import CardTable from "components/Cards/CardTable.js";
import CardTableDark from "components/Cards/CardTableDark.js";

// layout for page

import Admin from "layouts/Admin.js";


export default function Tables({posts},{color}) {
  const resultArr = posts.results;
  JSON.stringify(posts);
  console.log(posts);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableDark posts={posts} color="dark"/>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable posts={posts} color="light" />
        </div>
      </div>
    </>
  );
}

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

Tables.layout = Admin;

Tables.layout = Admin;
