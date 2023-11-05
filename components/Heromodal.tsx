import React, { useState } from "react";
import SingleForm from "./SingleForm";
import SaveButton from "./SaveButton";
import generateKey from "@/hooks/generateKey";
import { useContext } from "react";
import { LinkContext } from "@/context/useLinkContext";

interface formParams {
  key: string;
  urltype?: string;
  url?: string;
}

const HeroModal = () => {
  let LinkData = useContext(LinkContext);
  let formList = LinkData?.formList ?? [];
  let editForm = LinkData?.editForm;
  let RemoveForm = LinkData?.RemoveForm;
  let addForm = LinkData?.addForm;
  // const [formList, setFormList] = useState<formParams[]>([]);
  // console.log("check here", formList);

  // const addForm = () => {
  //   setFormList([
  //     ...formList,
  //     { key: generateKey(), urltype: "github", url: "" },
  //   ]);
  // };

  // const RemoveForm = (key: string) => {
  //   setFormList(
  //     formList.filter((a) => {
  //       return a.key !== key;
  //     })
  //   );
  // };

  // const editForm = (event: any) => {
  //   const { name, value } = event.target;
  //   const key = event.target.dataset.key;

  //   const newList = formList.map((a) => {
  //     if (key === a.key) {
  //       return { ...a, key: a.key, [name]: value };
  //     } else {
  //       return a;
  //     }
  //   });

  //   setFormList(newList);
  // };
  return (
    <div className="mx-4">
      <div>
        <h2 className="text-xl font-extrabold">Customize your Links</h2>
        <p className="font-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        </p>
      </div>
      <div
        className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-2 border-blue-500 hover:border-transparent rounded"
        onClick={addForm}
      >
        Create your Link
      </div>

      {formList.length > 0 &&
        formList.map((id) => (
          <SingleForm
           key={id.key}
          // removeForm={RemoveForm}
           id={id.key}
          // url={id.url}
          // urltype={id.urltype}
          // editform={editForm}
          />
        )) }
      {formList.length > 0 && <SaveButton />}
    </div>
  );
};

export default HeroModal;
