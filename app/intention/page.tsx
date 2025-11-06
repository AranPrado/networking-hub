import { Metadata } from "next";
import MainLayout from "../_layouts/main.layout";
import RenderPage from "./_components/render";

export const metadata: Metadata = {
  title: "Criar proposta de projeto",
  description: "Plataforma de gestão de networking",
};

export default function Intention() {
  return (
    <MainLayout>
      <RenderPage />
    </MainLayout>
  );
}
