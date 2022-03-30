import React from "react";
import { createPopper } from '@popperjs/core';

const TestDrop = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap bg-blueGray-600 max-w-48">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4 bg-blueGray-600">
          <div className="relative inline-flex align-middle w-4/12 bg-blueGray-600 max-w-48">
            <button
              className="text-white z-1 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-500 active:bg-blueGray-100 ease-linear transition-all duration-150 "
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              blueGray Dropdown
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48 flex flex-wrap"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal w-4/12 whitespace-wrap bg-blueGray-600 text-white"
                onClick={e => e.preventDefault()}
              >
                Thanks so much for the help! I unfortunately still do not have access to the TC Team inbox and Tags. I have not checked with my colleagues yet, but were you able to apply this access for all the emails listed on the ticket? If so, I can check in to see if they have access but thought I'd check in about my access first and verify you pushed to all the emails listed. Thanks again!
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-blueGray-600 text-white"
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-blueGray-600 text-white"
                onClick={e => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 bg-blueGray-600" />
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-blueGray-600 text-white"
                onClick={e => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDrop;