import { useMemo } from "react";

type Navigation = {
  href: string;
  title: string;
};

export type NavigationsData = Navigation[];

function useNavigations(): NavigationsData {
  const navigations = useMemo<NavigationsData>(
    () => [
      {
        href: "/",
        title: "トップ",
      },
      {
        href: "/services",
        title: "業務内容",
      },
      {
        href: "/fishes",
        title: "主力商品",
      },
      {
        href: "/setouchi-fish",
        title: "瀬戸内の魚",
      },
      {
        href: "/holiday",
        title: "休業日",
      },
      {
        href: "/access",
        title: "アクセス",
      },
    ],
    []
  );

  return navigations;
}

export default useNavigations;
