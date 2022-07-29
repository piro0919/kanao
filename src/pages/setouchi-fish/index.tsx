import NoSSR from "@mpth/react-no-ssr";
import Seo from "components/Seo";
import SetouchiFishTop, {
  SetouchiFishTopProps,
} from "components/SetouchiFishTop";
import SubLayout from "components/SubLayout";
import { ReactElement, useMemo } from "react";

function SetouchiFish(): JSX.Element {
  const fishes = useMemo<SetouchiFishTopProps["fishes"]>(
    () => [
      {
        description:
          "瀬戸内を代表する桜鯛。漁獲が増え安価になるのは春ですが、産卵を控えて身が肥えている冬が最もおいしい時期となります。",
        image: "11066519_609158835851517_3345246405955395810_n.jpg",
        name: "タイ",
        seasons: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
      },
      {
        name: "スズキ",
        seasons: [[11, 12, 1, 2, 3, 4]],
      },
      {
        description:
          "刺身、たたき、塩焼、幽庵焼きなど、様々な料理に使用することができます。金尾本店では瀬戸内産では船上活〆の非常に鮮度、状態の良いサワラを入荷しております。",
        name: "サワラ",
        seasons: [
          [5, 6],
          [10, 11, 12],
        ],
      },
      {
        name: "オコゼ",
        seasons: [
          [5, 6],
          [12, 1, 2],
        ],
      },
      {
        description:
          "産卵前の冬が非常に状態がよくなります。金尾本店では大きなサイズのサヨリを多く取り扱っております。",
        name: "サヨリ",
        seasons: [[12, 1, 2, 3, 4, 5]],
      },
      {
        description:
          "天ぷらなどで非常に好まれます。特に子持ちは触感が良く好まれます。",
        name: "チーイカ",
        seasons: [[2, 3, 4, 5, 6, 7]],
      },
      {
        name: "手長だこ",
        seasons: [[1, 2, 3, 4, 5, 6, 7]],
      },
      {
        description:
          "天然ものでは、冬に肝が大きくなり美味しい時期となります。金尾本店では養殖により肝を更に肥大化させ、フォアグラのような食感のウマヅラハギも取り扱っております。",
        name: "ウマヅラハギ",
        seasons: [
          [4, 5, 6],
          [10, 11],
        ],
      },
      {
        name: "コチ",
        seasons: [[12, 1, 2, 3, 4, 5, 6, 7]],
      },
      {
        description:
          "瀬戸内を代表する高級魚。刺身は薄造りが美味しく、アラは潮汁にすると非常に美味。",
        image: "1471836305413.jpg",
        name: "アコウ",
        seasons: [[6, 7, 8, 9]],
      },
      {
        description:
          "7月の祇園祭の時期によく好まれ高値となります。金尾本店では活魚を取り扱っているため湯引きにした際にはきれいな身の花が咲きます。",
        image: "1471836292586.jpg",
        name: "ハモ",
        seasons: [[5, 6, 7, 8, 9, 10]],
      },
      {
        description: "岡山県で2～3月、9～10月に禁漁となるため高値となります。",
        image: "1474439300295.jpg",
        name: "タコ",
        seasons: [[5, 6, 7, 8]],
      },
      {
        description:
          "福山で特に好まれて食べられる魚です。主にから揚げにして食べられます。",
        name: "ネブト",
        seasons: [[6, 7, 8]],
      },
      {
        name: "地エビ",
        seasons: [[5, 6, 7, 8, 9, 10, 11]],
      },
      {
        name: "キス",
        seasons: [[6, 7]],
      },
      {
        description:
          "秋はオスが身がつまり非常に美味しくなります。冬はメスが内子を持ち絶品です。",
        image: "1471836242790.jpg",
        name: "ワタリガニ",
        seasons: [[10, 11, 12, 1, 2]],
      },
      {
        name: "太刀魚",
        seasons: [[10, 11, 12, 1]],
      },
      {
        description:
          "淡路島産のナマコは漁獲後、現地で活かしこみを行い、漁獲された際のストレスを取り除くため、他の地域よりも身が柔らかく、非常に上質のナマコとなっております。金尾本店でも淡路島産の上質のナマコを入荷しております。",
        name: "ナマコ",
        seasons: [[12, 1, 2]],
      },
      {
        description:
          "煮付けが非常に美味しく、特に冬は頭に子を持つメスがとても好まれています。",
        name: "イイダコ",
        seasons: [[11, 12, 1, 2, 3]],
      },
      {
        description:
          "兵庫県で非常に好まれている釘煮となるイカナゴの新仔。特に淡路島産のイカナゴは非常に扱いもよく鮮度も抜群です。",
        name: "イカナゴ",
        seasons: [[2, 3]],
      },
      {
        description:
          "2月に特に身が肥えてきます。大きなものは煮付け、小さなものもから揚げなどで食べられ、瀬戸内で非常に好まれる魚です。​",
        name: "メダカカレイ",
        seasons: [[11, 12, 1, 2, 3, 4]],
      },
      {
        description: "冬のカレイはよく肥え、身がしまり非常に美味しくなります。",
        name: "カレイ",
        seasons: [[1, 2]],
      },
    ],
    []
  );

  return (
    <>
      <Seo title="瀬戸内の魚" />
      <NoSSR>
        <SetouchiFishTop fishes={fishes} />
      </NoSSR>
    </>
  );
}

SetouchiFish.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <SubLayout heading="瀬戸内の魚">{page}</SubLayout>;
};

export default SetouchiFish;
