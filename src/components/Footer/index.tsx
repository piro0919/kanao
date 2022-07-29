import { Separator } from "@radix-ui/react-separator";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
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
        <div className={styles.inner2}>
          <span>&copy; 2022 金尾本店</span>
          <div className={styles.anchorsWrapper}>
            <a
              className={styles.anchor}
              href="https://www.facebook.com/%E6%9C%89%E9%99%90%E4%BC%9A%E7%A4%BE-%E9%87%91%E5%B0%BE%E6%9C%AC%E5%BA%97-524816214285780/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineFacebook color="#333" size={32} />
            </a>
            <a
              className={styles.anchor}
              href="https://www.instagram.com/kanaohonten/?hl=ja"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram color="#333" size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
