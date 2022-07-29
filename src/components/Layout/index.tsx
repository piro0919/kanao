import Footer from "components/Footer";
import { ReactNode } from "react";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

export type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const { height } = useWindowSize();

  return (
    <div className={styles.wrapper} style={{ minHeight: height }}>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
