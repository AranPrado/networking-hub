import { Metadata } from "next";
import MainLayout from "../_layouts/main.layout";
import RenderPageAdmin from "./_components/render";

export const metadata: Metadata = {
  title: "Painel de administração",
  description: "Plataforma de gestão de networking",
};

export default function Admin() {
  return (
    <MainLayout>
      <RenderPageAdmin />
    </MainLayout>
  );
}
