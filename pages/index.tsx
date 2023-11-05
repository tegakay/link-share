import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroModal from "@/components/Heromodal";
import Addlink from "@/components/Addlink";
import SingleForm from "@/components/SingleForm";
import SaveButton from "@/components/SaveButton";
import MobileScreen from "@/components/MobileScreen";
import Editor from "./editor";
import { LinkContextProvider } from "@/context/useLinkContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LinkContextProvider>
      <div>
        <Editor />
      </div>
    </LinkContextProvider>
  );
}
