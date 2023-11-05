import React, { useState, createContext } from "react";
import generateKey from "@/hooks/generateKey";

interface LinkStateProp {
  key: string;
  title?: string;
  link?: string;
}

interface LinkContextProp {
  formList:formParams[];
  RemoveForm:Function;
  //addForm:Function;
  addForm:React.MouseEventHandler;
  editForm: React.ChangeEventHandler;
}

interface child {
  children: React.ReactNode;
}
interface formParams {
  key: string;
  urltype?: string;
  url?: string;
}


export const LinkContext = createContext<LinkContextProp | undefined>(undefined);

export const LinkContextProvider = ({ children }: child) => {
  const [formList, setFormList] = useState<formParams[]>([]);

  const addForm = () => {
    setFormList([
      ...formList,
      { key: generateKey(), urltype: "github", url: "github.com" },
    ]);
  };

  const RemoveForm = (key: string) => {
    setFormList(
      formList.filter((a) => {
        return a.key !== key;
      })
    );
  };

  const editForm = (event: any) => {
    const { name, value } = event.target;
    const key = event.target.dataset.key;

    const newList = formList.map((a) => {
      if (key === a.key) {
        return { ...a, key: a.key, [name]: value };
      } else {
        return a;
      }
    });

    setFormList(newList);
  };

  return (
    <LinkContext.Provider value={{formList,editForm,RemoveForm,addForm}}>{children}</LinkContext.Provider>
  );
};


