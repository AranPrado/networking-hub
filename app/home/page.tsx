import { Metadata } from "next";
import ButtonsHome from "./_components/buttons";

import HomeLayout from "../_layouts/home.layout";

export const metadata: Metadata = {
  title: "Networking Hub",
  description: "Plataforma de gestão de networking",
};

export default function Home() {
  return (
    <HomeLayout>
      <ButtonsHome />;
    </HomeLayout>
  );
}
