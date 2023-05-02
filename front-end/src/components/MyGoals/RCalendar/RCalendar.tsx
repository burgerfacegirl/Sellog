import { useState } from "react";
import { SSection, StyledCalendar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const RCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTileClassName = ({ date }: any) => {
    if (date.toDateString() === selectedDate?.toDateString()) {
      return "selected__day";
    }
  };

  const handleClickDay = (e: Date) => {
    setSelectedDate(e);
  };

  return (
    <SSection>
      <StyledCalendar
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        selectRange={true}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} size="xl" />}
        prevLabel={<FontAwesomeIcon icon={faAngleLeft} size="xl" />}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        // 일요일부터 시작하도록 달력 타입 변경
        calendarType="US"
        onClickDay={handleClickDay}
        // 영어로 변경
        locale={"en"}
        // value 속성 => 선택된 날짜
        // value={selectedDate}
        tileClassName={handleTileClassName}
      ></StyledCalendar>
    </SSection>
  );
};

export default RCalendar;
