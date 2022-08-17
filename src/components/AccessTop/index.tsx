import styles from "./style.module.scss";

function AccessTop(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        allowFullScreen={false}
        className={styles.iframe}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.7907426335646!2d133.3702985512109!3d34.48283238039519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551110377a0b95f%3A0xdab804d2e097809f!2z77yI5pyJ77yJ6YeR5bC-5pys5bqX!5e0!3m2!1sja!2sjp!4v1658936375144!5m2!1sja!2sjp"
      />
      <div className={styles.listWrapper}>
        <dl className={styles.list}>
          <dt>住所</dt>
          <dd>
            <div>有限会社 金尾本店</div>
            <div>〒720-0806 広島県福山市南町20丁目16</div>
          </dd>
          <dt>TEL</dt>
          <dd>084-922-3886</dd>
          <dt>FAX</dt>
          <dd>084-921-7614</dd>
          <dt>営業時間</dt>
          <dd>
            <div>6:30～16:00</div>
            <div>水曜営業日 6:30～12:00</div>
          </dd>
          <dd>休業日</dd>
          <dt>水曜・日曜・祝日</dt>
        </dl>
      </div>
    </div>
  );
}

export default AccessTop;
