import Image from "next/image";
import styles from "./style.module.scss";

type Fish = {
  description: string;
  image?: string;
  isLiveFish: boolean;
  name: string;
};

export type MainProductProps = {
  fishes: Fish[];
};

function MainProduct({ fishes }: MainProductProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descriptionWrapper}>
        <p>
          金尾本店では、主力商品以外にも100種を超えるさまざまな魚を取り扱っております。
          <br />
          また、可能な限り入荷にも対応しております。
          <br />*
          がついている魚につきましては、水槽で活きたままの状態で取り扱っております。
        </p>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {fishes.map(({ description, image, isLiveFish, name }) => (
            <li className={styles.item} key={name}>
              <div className={styles.imageWrapper}>
                <Image
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  src={`/images/${image || "l_e_others_501.png"}`}
                  unoptimized={true}
                />
              </div>
              <div className={styles.textsWrapper}>
                <div className={styles.nameWrapper}>
                  <span className={styles.name}>{name}</span>
                  {isLiveFish ? <abbr>*</abbr> : null}
                </div>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainProduct;
