__d(
  "WAWebYahooCalendarLink",
  ["WAWebGuestEventsCalendarUtils", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new URL("https://calendar.yahoo.com/");
      return (
        t.searchParams.set("v", "60"),
        t.searchParams.set("TITLE", e.title),
        t.searchParams.set(
          "ST",
          s(o("WAWebGuestEventsCalendarUtils").getStartDate(e)),
        ),
        t.searchParams.set(
          "ET",
          s(o("WAWebGuestEventsCalendarUtils").getEndDate(e)),
        ),
        e.description != null &&
          e.description !== "" &&
          t.searchParams.set("DESC", e.description),
        e.location != null &&
          e.location !== "" &&
          t.searchParams.set("in_loc", e.location),
        t.toString()
      );
    }
    function s(e) {
      if (Number.isNaN(e.getTime()))
        throw r("err")("Invalid Yahoo Calendar event date");
      var t = String(e.getFullYear()).padStart(4, "0"),
        n = [e.getMonth() + 1, e.getDate()]
          .map(function (e) {
            return String(e).padStart(2, "0");
          })
          .join(""),
        o = [e.getHours(), e.getMinutes(), e.getSeconds()]
          .map(function (e) {
            return String(e).padStart(2, "0");
          })
          .join("");
      return "" + t + n + "T" + o;
    }
    l.default = e;
  },
  98,
);
