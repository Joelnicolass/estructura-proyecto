import React, { useEffect } from "react";

import { Image, Navbar, Text } from "@nextui-org/react";
import { routes } from "../../core/router/appRouter";

import Links from "./Links";
import logoSrc from "../../assets/logo.svg";

import { useSWRConfig } from "swr";

const Nav = () => {
  const { cache } = useSWRConfig();

  useEffect(() => {
    //console.log(cache);
  }, [cache]);

  return (
    <Navbar>
      <Navbar.Content>
        <Navbar.Brand>
          <Image height={50} width={50} src={logoSrc} />
        </Navbar.Brand>
        <Links routes={routes} />
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
