import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { LinkContext } from "@/context/useLinkContext";

interface LinkContext {
  title: string;
  link: string;
}

const SingleForm = ({
 
  id,
 
}: {
  removeForm?: Function;
  id?: string;
  
}) => {
  const deleteForm = () => {
      
    id && RemoveForm ? RemoveForm(id) : console.log("wrong way");
  };

let LinkData = useContext(LinkContext)
let formList = LinkData?.formList;
let editForm = LinkData?.editForm
let RemoveForm = LinkData?.RemoveForm
let addForm = LinkData?.addForm

console.log('context',formList)

  return (
    <div className="flex flex-col bg-gray-200 p-4 text-xs">
      <div className="flex justify-between">
        <div className="flex ">
          {" "}
          <HiOutlineBars3 />
          <span>Link 1</span>
        </div>
        <div className="" onClick={deleteForm}>
          Remove
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Platform
        </label>
        <select
          data-key={id}
          //onChange={editform}
          onChange={editForm}
          name="urltype"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="github">Github</option>
          <option value="linkedin">Linkedin</option>
          <option value="twitter">Twitter</option>
        </select>

        {/* include validation with required or other standard HTML validation rules */}
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Link
        </label>
        <input
          data-key={id}
          name="url"
          //onChange={editform}
          onChange={editForm}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default SingleForm;
