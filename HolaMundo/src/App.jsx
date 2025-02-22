import React, { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  // const addAt = (userName) => `@${userName}`;

  const midudev = { isFollowing: true, userName: "midudev" }; //Es mala practica {...midudev}

  return (
    /*  <React.Fragment>
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
    </React.Fragment> */
    // Lo de abajo es igual a lo de arriba

    <section className="app">
      {/* <TwitterFollowCard {...midudev}>
          Miguel angel
          </TwitterFollowCard> */}

      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard userName="pheralb" initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>

      {/* <TwitterFollowCard formatUserName={addAt} isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
        <TwitterFollowCard formatUserName={addAt} isFollowing userName="elonmusk" name="Elon Musk" />
        <TwitterFollowCard formatUserName={addAt} isFollowing userName="vxnder" name="Vanderhart" /> */}
    </section>
  );
}

//Para renderizar varios usuarios con un array

const users = [
  {
    userName: 'PacoHdzes',
    name: 'Paco Hdez',
    isFollowing: false
  },
  {
    userName: 'Miguel Angel Duran',
    name: 'midudev',
    isFollowing: true
  }
];

export function App() {
  return (

   <section className="app">
    {
      users.map(({ userName, name, isFollowing})  => (
        /* const { userName, name, isFollowing} = user; */
        // return (
          <TwitterFollowCard
          // La key es un identificador unico, mejor utilizar algo unico del elemento
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        // );
      ))
    }
   </section>

  );
}
