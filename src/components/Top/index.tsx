import Navigation from "components/Navigation";
import TopHeader from "components/TopHeader";
import Image from "next/image";
import styles from "./style.module.scss";

function Top(): JSX.Element {
  return (
    <div>
      <TopHeader />
      <aside className={styles.navigationWrapper}>
        <Navigation />
      </aside>
      <main className={styles.main}>
        <div className={styles.inner}>
          <article className={styles.article}>
            <div className={styles.imageWrapper}>
              <Image
                alt="全国の漁港から 旬の魚を入荷"
                layout="fill"
                objectFit="cover"
                quality={100}
                src="/images/11066519_609158835851517_3345246405955395810_n.jpg"
                unoptimized={true}
              />
            </div>
            <div className={styles.textsWrapper}>
              <h2 className={styles.heading2}>全国の漁港から 旬の魚を入荷</h2>
              <p className={styles.paragraph}>
                昭和33年創業、広島県福山市の鮮魚卸店です。
                <br />
                仕入れは地元、福山地方卸売市場を初め、広島市場や岡山市場など独自のルートによる入荷も行っております。
              </p>
            </div>
          </article>
          <article className={styles.article}>
            <div className={styles.imageWrapper}>
              <Image
                alt="全国の漁港から 旬の魚を入荷"
                layout="fill"
                objectFit="cover"
                quality={100}
                src="/images/1482305306418.jpg"
                unoptimized={true}
              />
            </div>
            <div className={styles.textsWrapper}>
              <h2 className={styles.heading2}>鮮度にこだわり 高級鮮魚特化</h2>
              <p className={styles.paragraph}>
                鮮度にこだわり、水槽にて活魚も取り扱っており、鮮度を保つ活〆の技術にも自信を持っております。
                <br />
                スーパーには無いような高級魚をお安い価格で販売しております。
              </p>
            </div>
          </article>
          <article className={styles.article}>
            <div className={styles.imageWrapper}>
              <Image
                alt="全国の漁港から 旬の魚を入荷"
                layout="fill"
                objectFit="cover"
                quality={100}
                src="/images/10653435_537336209700447_7534177561480153227_n.jpg"
                unoptimized={true}
              />
            </div>
            <div className={styles.textsWrapper}>
              <h2 className={styles.heading2}>幅広いお客様へ対応</h2>
              <p className={styles.paragraph}>
                切り身にも対応しており、卸先は病院給食・ホテル・料亭・居酒屋など幅広く手掛けております。
                <br />
                もちろん、店舗にて一般のお客様への対応も行っております。
                <br />
                また、全国への発送も承りまっております。
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Top;
