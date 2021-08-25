import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Holiday = ({ event }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={event.map((ev) => {
        // console.log(ev);
        return {
          title: `${ev.name}`,
          start: ev.date.iso,
        };
      })}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today,dayGridDay,dayGridWeek,dayGridMonth",
      }}
    />
  );
};

export default Holiday;
