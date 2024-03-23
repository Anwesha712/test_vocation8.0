import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import NavItem from "./utils/navItem";
import { GalleryRoute, ContactRoute } from "./routeProvider";
import CTA from "./utils/CTA";

function NavbarSm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="block lg:hidden">
      <Button ref={btnRef} colorScheme="black" onClick={onOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody className="inline-flex justify-center flex-col">
            <ul className="flex items-center w-full flex-col ">
              <NavItem title={"Home"} nav={"/"} />
              <NavItem title={"Gallery"} nav={GalleryRoute} />
              <NavItem title={"Events"} nav={"/"} />
              <NavItem title={"Contact"} nav={`${ContactRoute}`} />
              <NavItem title={"Members"} nav={"/"} />
              <CTA />
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarSm;
