__d(
  "WAWebOutlookCalendarLink",
  ["WAWebGuestEventsCalendarUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
      return (
        t.searchParams.set("path", "/calendar/action/compose"),
        t.searchParams.set("rru", "addevent"),
        t.searchParams.set("subject", e.title),
        t.searchParams.set(
          "startdt",
          o("WAWebGuestEventsCalendarUtils").getStartDate(e).toISOString(),
        ),
        t.searchParams.set(
          "enddt",
          o("WAWebGuestEventsCalendarUtils").getEndDate(e).toISOString(),
        ),
        e.description != null &&
          e.description !== "" &&
          t.searchParams.set("body", e.description),
        e.location != null &&
          e.location !== "" &&
          t.searchParams.set("location", e.location),
        t.toString()
      );
    }
    l.default = e;
  },
  98,
);
