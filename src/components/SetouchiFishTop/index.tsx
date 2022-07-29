import dayjs from "dayjs";
import Image from "next/image";
import { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

type Season = number[];

type Fish = {
  description?: string;
  image?: string;
  name: string;
  seasons: Season[];
};

export type SetouchiFishTopProps = {
  fishes: Fish[];
};

function SetouchiFishTop({ fishes }: SetouchiFishTopProps): JSX.Element {
  const { width } = useWindowSize();
  const currentMonth = useMemo(() => dayjs().get("month") + 1, []);
  const allMonth = useMemo(
    () =>
      Array(12)
        .fill(undefined)
        .map(
          (_, index) =>
            index + currentMonth - (index + currentMonth > 12 ? 12 : 0)
        ),
    [currentMonth]
  );
  const items = useMemo(
    () =>
      fishes
        .flatMap(({ seasons, ...fish }) =>
          seasons.map((season) => ({ ...fish, season, seasons }))
        )
        .sort(({ season: seasonA }, { season: seasonB }) => {
          const indexA = allMonth.findIndex((month) => seasonA.includes(month));
          const indexB = allMonth.findIndex((month) => seasonB.includes(month));

          if (indexA === indexB) {
            if (seasonA[0] === seasonB[0]) {
              return seasonA[seasonA.length - 1] > seasonB[seasonB.length - 1]
                ? 1
                : -1;
            }

            return seasonA[0] > seasonB[0] ? 1 : -1;
          }

          return indexA > indexB ? 1 : -1;
        })
        .map(({ description, image, name, season }) => (
          <VerticalTimelineElement
            contentArrowStyle={{
              background: "#333",
              border: 0,
              height: "1px",
              width: width >= 1170 ? "14%" : "40px",
            }}
            date={`${dayjs()
              .startOf("month")
              .set("month", season[0] - 1)
              .format("M月")} 〜 ${dayjs()
              .startOf("month")
              .set("month", season[season.length - 1] - 1)
              .format("M月")}`}
            dateClassName={styles.date}
            iconClassName={styles.icon}
            key={`${name}${season[0]}`}
            textClassName={styles.verticalTimelineElement}
          >
            <div className={styles.inner}>
              {image ? (
                <div className={styles.imageWrapper}>
                  <Image
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    src={`/images/${image}`}
                    unoptimized={true}
                  />
                </div>
              ) : null}
              <div className={styles.textsWrapper}>
                <span className={styles.name}>{name}</span>
                {description ? (
                  <p className={styles.description}>{description}</p>
                ) : null}
              </div>
            </div>
          </VerticalTimelineElement>
        )),
    [allMonth, fishes, width]
  );

  return (
    <div className={styles.wrapper}>
      <VerticalTimeline className={styles.verticalTimeline} lineColor="#333">
        {items}
      </VerticalTimeline>
    </div>
  );
}

export default SetouchiFishTop;
