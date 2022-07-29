import { Separator } from "@radix-ui/react-separator";
import styles from "./style.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.title}>
            <small>有限会社</small>
            <span>金尾本店</span>
          </div>
          <div className={styles.inner2}>
            <span>〒720-0806</span>
            <span>広島県福山市南町20丁目16</span>
          </div>
          <div className={styles.inner2}>
            <div className={styles.inner2}>
              <span>TEL</span>
              <span>084-922-3886</span>
            </div>
            <Separator
              className={styles.separator}
              decorative={true}
              orientation="vertical"
            />
            <div className={styles.inner2}>
              <span>FAX</span>
              <span>084-921-7614</span>
            </div>
          </div>
          <div className={styles.inner2}>
            <span>営業時間</span>
            <span>6:30～16:00（水曜日のみ 6:30～12:00）</span>
          </div>
        </div>
        <span>&copy; 2022 金尾本店</span>
      </div>
    </footer>
  );
}

export default Footer;
