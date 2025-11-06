import MainLayout from "@/app/_layouts/main.layout";
import { Metadata } from "next";
import RenderPageMyIntention from "./_components/render";

export const metadata: Metadata = {
  title: "Minhas propostas",
  description: "Plataforma de gestão de networking",
};

export default function MyIntention() {
  return (
    <MainLayout>
      <RenderPageMyIntention />
    </MainLayout>
  );
}
