import { NextSeo, NextSeoProps } from "next-seo";

export type SeoProps = Pick<NextSeoProps, "title">;

function Seo({ title }: SeoProps): JSX.Element {
  return (
    <NextSeo
      title={
        title
          ? `${title} - 有限会社 金尾本店`
          : "有限会社 金尾本店 - 広島県福山市の鮮魚卸"
      }
    />
  );
}

export default Seo;
