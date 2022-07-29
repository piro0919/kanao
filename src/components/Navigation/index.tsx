import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

function Navigation(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <div className={styles.inner}>
        <Link href="/">
          <a className={pathname === "/" ? styles.active : ""}>トップ</a>
        </Link>
        <Separator
          className={styles.separator}
          decorative={true}
          orientation="vertical"
        />
        <Link href="/services">
          <a className={pathname === "/services" ? styles.active : ""}>
            業務内容
          </a>
        </Link>
        <Separator
          className={styles.separator}
          decorative={true}
          orientation="vertical"
        />
        <Link href="/fishes">
          <a className={pathname === "/fishes" ? styles.active : ""}>
            主力商品
          </a>
        </Link>
        <Separator
          className={styles.separator}
          decorative={true}
          orientation="vertical"
        />
        <Link href="/setouchi-fish">
          <a className={pathname === "/setouchi-fish" ? styles.active : ""}>
            瀬戸内の魚
          </a>
        </Link>
        <Separator
          className={styles.separator}
          decorative={true}
          orientation="vertical"
        />
        <Link href="/holiday">
          <a className={pathname === "/holiday" ? styles.active : ""}>休業日</a>
        </Link>
        <Separator
          className={styles.separator}
          decorative={true}
          orientation="vertical"
        />
        <Link href="/access">
          <a className={pathname === "/access" ? styles.active : ""}>
            アクセス
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
