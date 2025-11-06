"use client";

import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return { handleNavigation };
};
