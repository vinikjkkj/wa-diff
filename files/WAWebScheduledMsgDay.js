__d(
  "WAWebScheduledMsgDay",
  ["WAWebClock", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Date(e * 1e3);
      return {
        day: s(n, t),
        date: n.toLocaleDateString(r("WAWebL10N").getFullLocale(), {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        time: o("WAWebClock").Clock.timestampStr(e),
      };
    }
    function s(e, t) {
      if (e.toDateString() === t.toDateString()) return "today";
      var n = new Date(t);
      return (
        n.setDate(n.getDate() + 1),
        e.toDateString() === n.toDateString() ? "tomorrow" : "later"
      );
    }
    l.getScheduledMsgDay = e;
  },
  98,
);
