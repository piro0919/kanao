import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import Calendar from "react-calendar";
import styles from "./style.module.scss";

export type HolidayTopProps = {
  holidays: Dayjs[];
  wednesdayBusinessDays: Dayjs[];
};

function HolidayTop({
  holidays,
  wednesdayBusinessDays,
}: HolidayTopProps): JSX.Element {
  const items = useMemo(
    () =>
      Array(12)
        .fill(undefined)
        .map((_, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.monthWrapper}>{index + 1}</div>
            <Calendar
              calendarType="US"
              className={styles.calendar}
              defaultActiveStartDate={dayjs().set("month", index).toDate()}
              formatDay={(_, date): string => `${dayjs(date).date()}`}
              locale="ja"
              navigationLabel={({ date }): string =>
                `${dayjs(date).month() + 1}`
              }
              showNavigation={false}
              showNeighboringMonth={false}
              tileClassName={({ date }): string =>
                `${styles.tile} ${
                  dayjs(date).day() === 0 ||
                  (dayjs(date).day() === 3 &&
                    !wednesdayBusinessDays.some((wednesdayBusinessDay) =>
                      wednesdayBusinessDay.isSame(date)
                    )) ||
                  holidays.some((holiday) => holiday.isSame(date))
                    ? styles.holiday
                    : styles.businessDay
                }`
              }
              value={dayjs().toDate()}
              view="month"
            />
          </li>
        )),
    [holidays, wednesdayBusinessDays]
  );

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>{items}</ul>
      <div className={styles.textWrapper}>
        <p>
          日曜日、祝日、および福山地方卸売市場の臨時休市日である水曜日が休業日となります。
        </p>
      </div>
    </div>
  );
}

export default HolidayTop;
