import MainProduct, { MainProductProps } from "components/MainProduct";
import Seo from "components/Seo";
import SubLayout from "components/SubLayout";
import { ReactElement, useMemo } from "react";

function Fishes(): JSX.Element {
  const fishes = useMemo<MainProductProps["fishes"]>(
    () => [
      {
        description:
          "金尾本店では養殖ウナギはもちろん、天然ウナギも取り扱っております。",
        image: "1471836230548.jpg",
        isLiveFish: true,
        name: "天然ウナギ",
      },
      {
        description: "大きな物は500ｇほどのオコゼも泳いでおります。",
        isLiveFish: true,
        name: "オコゼ",
      },
      {
        description:
          "一匹の塩焼きや煮付けに適したサイズから、2kgを超える大きな物まで取り扱ってます。活かしの高鮮度品の為、アコウの薄造りの際、しっかりとした触感を楽しむことができます。",
        image: "1471836305413.jpg",
        isLiveFish: true,
        name: "アコウ",
      },
      {
        description:
          "水槽にて活かしで取り扱っているため、アワビ特有の触感を失うことなく提供することができます。大きなサイズから小さなサイズまで注文に合わせた品を入荷いたします。",
        isLiveFish: true,
        name: "アワビ",
      },
      {
        description: "大ぶりの甘みの強い車エビを取り扱っております。",
        image: "1474439336978.jpg",
        isLiveFish: true,
        name: "車エビ",
      },
      {
        description: "開いた状態での提供が可能です。",
        image: "1471836221441.jpg",
        isLiveFish: true,
        name: "アナゴ",
      },
      {
        description:
          "産卵前の初夏が旬。程よい柔らかさで甘みがあり、脂が乗っております。刺身、炙りで非常に美味しくいただけます。瀬戸内海にカツオがいないため、本種をカツオに見立てたことから「マナガツオ」という名がついたと言われております。",
        image: "1474439286192.jpg",
        isLiveFish: false,
        name: "マナガツオ",
      },
      {
        description:
          "金尾本店にはふぐ調理師免許を取得した者が4名おり、フグの取扱量は福山市内随一となっております。",
        image: "1482305306418.jpg",
        isLiveFish: true,
        name: "養殖トラフグ",
      },
      {
        description:
          "秋はオスが身が詰まり非常に状態が良くなります。冬はメスが内子を持ち絶品です。",
        image: "1471836242790.jpg",
        isLiveFish: true,
        name: "ワタリガニ",
      },
      {
        description:
          "夏のハモ、冬のフグと呼ばれる夏を代表する魚です。7月の祇園祭にて特に好んで食べられます。金尾本店では活魚で取り扱っているため、湯引きにした際にきれいに花が咲きます。",
        image: "1471836292586.jpg",
        isLiveFish: true,
        name: "ハモ",
      },
    ],
    []
  );

  return (
    <>
      <Seo title="主力商品" />
      <MainProduct fishes={fishes} />
    </>
  );
}

Fishes.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <SubLayout heading="主力商品">{page}</SubLayout>;
};

export default Fishes;
