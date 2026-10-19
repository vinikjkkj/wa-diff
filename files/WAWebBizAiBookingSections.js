__d(
  "WAWebBizAiBookingSections",
  ["WAWebBizAiBookingTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e
          .map(function (e, t) {
            return { booking: e, originalIndex: t };
          })
          .sort(function (e, t) {
            var n = u(e.booking.startDateTime),
              r = u(t.booking.startDateTime);
            return n - r || e.originalIndex - t.originalIndex;
          }),
        n = new Map();
      for (var r of t) {
        var a,
          i = r.booking,
          l = o("WAWebBizAiBookingTime").getBookingTimePresentation({
            endDateTime: i.endDateTime,
            startDateTime: i.startDateTime,
            timezoneId: i.timezoneId,
          }),
          c =
            (a = l == null ? void 0 : l.dateKey) != null
              ? a
              : "undated-" + i.id,
          d = n.get(c);
        d != null
          ? d.items.push({ booking: i, time: l })
          : n.set(c, {
              dateHeading:
                l == null
                  ? null
                  : o("WAWebBizAiBookingTime").getBookingDateHeading(l.dateKey),
              dateKey: c,
              items: [{ booking: i, time: l }],
            });
      }
      return Array.from(n.values()).sort(s);
    }
    function s(e, t) {
      return e.dateKey < t.dateKey ? -1 : e.dateKey > t.dateKey ? 1 : 0;
    }
    function u(e) {
      return e != null && Number.isFinite(e) ? e : Number.POSITIVE_INFINITY;
    }
    l.getBookingSections = e;
  },
  98,
);
