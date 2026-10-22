__d(
  "WAWebBizAiAppointmentAvailabilityFormat",
  [
    "fbt",
    "WAWebBizAiAppointmentAvailabilityNormalize",
    "WAWebSmbUtilsTimeUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = [1, 2, 3, 4, 5, 6, 7];
    function d(e, t) {
      return e.filter(function (e) {
        return e.dayOfWeek === t;
      });
    }
    function m(e, t) {
      return (
        t === void 0 && (t = ""),
        e.length === 0
          ? s._(/*BTDS*/ "Closed")
          : []
              .concat(e)
              .sort(function (e, t) {
                return e.startTimeMinutes - t.startTimeMinutes;
              })
              .map(function (e, n) {
                return u.jsxs(
                  u.Fragment,
                  { children: [n === 0 ? null : u.jsx("br", {}), p(e, t)] },
                  e.startTimeMinutes + "-" + e.endTimeMinutes,
                );
              })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      var n;
      return (n = _(e, t)) != null ? n : f(e, t);
    }
    function _(e, t) {
      return e.startTimeMinutes !== 0 ||
        e.endTimeMinutes !==
          o("WAWebBizAiAppointmentAvailabilityNormalize").MINUTES_IN_DAY
        ? null
        : t === ""
          ? s._(/*BTDS*/ "Open 24 hours")
          : s._(/*BTDS*/ "Open 24 hours {time zone abbreviation}", [
              s._param("time zone abbreviation", t),
            ]);
    }
    function f(e, t) {
      var n = o("WAWebSmbUtilsTimeUtils").minutesToTime(e.startTimeMinutes),
        r = o("WAWebSmbUtilsTimeUtils").minutesToTime(e.endTimeMinutes);
      return t === ""
        ? s._(/*BTDS*/ "{start time} - {end time}", [
            s._param("start time", n),
            s._param("end time", r),
          ])
        : s._(/*BTDS*/ "{start time} - {end time} {time zone abbreviation}", [
            s._param("start time", n),
            s._param("end time", r),
            s._param("time zone abbreviation", t),
          ]);
    }
    var g = new Map();
    function h(e, t, n) {
      if ((n === void 0 && (n = new Date()), e == null || e === "")) return "";
      try {
        var r,
          o = t + " " + e,
          a = g.get(o);
        a == null &&
          ((a = new Intl.DateTimeFormat(t, {
            timeZone: e,
            timeZoneName: "short",
          })),
          g.set(o, a));
        var i =
          (r = a.formatToParts(n).find(function (e) {
            return e.type === "timeZoneName";
          })) == null
            ? void 0
            : r.value;
        return i != null ? i : e;
      } catch (t) {
        return e;
      }
    }
    ((l.DAYS_IN_WEEK = c),
      (l.getAvailabilityForDay = d),
      (l.formatAvailability = m),
      (l.getTimeZoneAbbreviation = h));
  },
  226,
);
