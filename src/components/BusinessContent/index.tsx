import Image from "next/image";
import styles from "./style.module.scss";

function BusinessContent(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <article className={styles.article}>
        <Image
          alt="切り身に対応した病院給食"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/1488006514366.jpg"
          unoptimized={true}
        />
        <div className={styles.inner}>
          <h2 className={styles.heading2}>切り身に対応した病院給食</h2>
          <p className={styles.paragraph}>
            切り身のグラム指定、腹骨取り、骨なしなど様々な対応をさせていただいております。
            <br />
            運搬の際の温度管理にも保冷車の使用や氷打ちなどを行い注意を払っております。
            <br />
            少量での配送も承っております。
            <br />
            ご連絡いただければ、切り身のおおよその価格をお伝えすることもできます。
            <br />
            金尾本店は、美味しいお魚でＱＯＬの向上を応援致します。
            <br />
            是非一度ご相談ください。
          </p>
        </div>
      </article>
      <article className={styles.article}>
        <Image
          alt="飲食店への卸"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/DSC_0011.JPG"
          unoptimized={true}
        />
        <div className={styles.inner}>
          <h2 className={styles.heading2}>飲食店への卸</h2>
          <p className={styles.paragraph}>
            スーパーや他店には無い商品も多く取り扱っております。
            <br />
            電話やFAXでの事前注文をいただければ、仕入先各所へ連絡を行い入荷対応を行います。
            <br />
            時化の状況により入荷がない場合がございます。
            <br />
            購入商品が決まっている（定番化している）場合、店舗へ足を運ばずFAXで注文をいただき、水洗いや3枚卸などの加工の後、配送させていただくことができます。
            <br />
            もちろん、店舗にて並んでいる商品を直接見てお買い求めいただくお客様も多くいらっしゃいます。
            <br />
            福山市内のみならず、尾道エリアにも配送ルートがありますので、是非一度ご相談ください。
            <br />
          </p>
        </div>
      </article>
      <article className={styles.article}>
        <Image
          alt="一般消費者様への販売"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/1486105063643.jpg"
          unoptimized={true}
        />
        <div className={styles.inner}>
          <h2 className={styles.heading2}>一般消費者様への販売</h2>
          <p className={styles.paragraph}>
            全国の漁港から入荷した、鮮度の良いお魚を数多く取り扱っております。
            <br />
            店舗では商品はパック詰めされておらず、量り売りとなっております。
            <br />
            希望商品を希望の量でお売りすることができます。
            <br />
            なお、価格は仕入れ状況により変動するため時価となっております。
            <br />
            刺身の盛り合わせ（大皿盛り・船盛り・鯛姿造り）、ハモの湯引き、カツオのたたきなどにも対応させていただきます。
            <br />
            お時間がかかる場合がございますので、電話や店舗訪問での事前注文をおすすめしております。
            <br />
            鮮度にこだわっているため、入荷当日に商品を売り切るようにしております。
            <br />
            その為、午後になると商品が少なくなっている場合がございます。
            <br />
            大皿でのお刺身の盛り合わせなどは前日までにご注文いただくことをお勧めしております。
          </p>
        </div>
      </article>
      <article className={styles.article}>
        <Image
          alt="全国への鮮魚発送"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/1488006523241.jpg"
          unoptimized={true}
        />
        <div className={styles.inner}>
          <h2 className={styles.heading2}>全国への鮮魚発送</h2>
          <p className={styles.paragraph}>
            離れて住むご家族、御親戚、ご友人などへ地元のお魚をお届けすることができます。
            <br />
            ご購入された品の全国発送を承っております（送料別）。
          </p>
        </div>
      </article>
    </div>
  );
}

export default BusinessContent;
