import axios from "axios";
import HolidayTop, { HolidayTopProps } from "components/HolidayTop";
import Seo from "components/Seo";
import SubLayout from "components/SubLayout";
import dayjs from "dayjs";
import { ReactElement, useEffect, useState } from "react";

function Holiday(): JSX.Element {
  const currentYear = dayjs().get("year");
  const [holidays, setHolidays] = useState<HolidayTopProps["holidays"]>(
    // TODO: 0815, 0816 がパターンに当てはまってない
    ["0102", "0103", "0104", "0815", "0816", "1231"].map((date) =>
      dayjs(`${currentYear}${date}`)
    )
  );
  const [wednesdayBusinessDays, setWednesdayBusinessDays] = useState<
    HolidayTopProps["wednesdayBusinessDays"]
  >([]);

  useEffect(() => {
    axios(`https://holidays-jp.github.io/api/v1/${currentYear}/date.json`).then(
      ({ data: holiday }) => {
        setHolidays((prevHolidays) => [
          ...prevHolidays,
          ...Object.keys(holiday).map((holiday) => dayjs(holiday)),
        ]);
      }
    );
  }, [currentYear]);

  useEffect(() => {
    axios(`/documents/wednesdayBusinessDays.json`).then(
      ({ data: wednesdayBusinessDays }) => {
        setWednesdayBusinessDays(
          wednesdayBusinessDays.map((wednesdayBusinessDay: string) =>
            dayjs(`${currentYear}${wednesdayBusinessDay}`)
          )
        );
      }
    );
  }, [currentYear]);

  return (
    <>
      <Seo title="休業日" />
      <HolidayTop
        holidays={holidays}
        wednesdayBusinessDays={wednesdayBusinessDays}
      />
    </>
  );
}

Holiday.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return <SubLayout heading="休業日">{page}</SubLayout>;
};

export default Holiday;
