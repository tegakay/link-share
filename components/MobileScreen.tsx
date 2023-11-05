import React from "react";
import LinkPanel from "./LinkPanel";
import Image from "next/image";
import { useContext } from "react";
import { LinkContext } from "@/context/useLinkContext";

const MobileScreen = () => {
  let LinkData = useContext(LinkContext);
  let formList = LinkData?.formList ?? [];
  return (
    <div className="py-8">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-white-800 border-[14px] rounded-[2.5rem] h-[400px] w-[240px]">
        <div className="m-4 p-4 flex flex-col justify-center">
          <Image
            src="http://via.placeholder.com/200x200"
            width={80}
            height={80}
            alt="Profle picture of page owner"
          />
          <p className="text-sm">John Doe</p>
          <p className="text-xs">Welcome to my profile page</p>
        </div>
        <div className="">
          {/* <LinkPanel /> */}
          {formList.length > 0 &&
        formList.map((id) => (
          <LinkPanel
           key={id.key}
          // removeForm={RemoveForm}
           id={id.key}
          url={id.url}
          urltype={id.urltype}
          // editform={editForm}
          />
        )) }
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
