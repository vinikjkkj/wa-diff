__d(
  "WAWebBizAiAppointmentAvailabilityFormat",
  ["fbt", "WAWebSmbUtilsTimeUtils", "react"],
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
    function _(e, t) {
      if (e == null || e === "") return "";
      try {
        var n,
          r =
            (n = new Intl.DateTimeFormat(t, {
              timeZone: e,
              timeZoneName: "short",
            })
              .formatToParts(new Date())
              .find(function (e) {
                return e.type === "timeZoneName";
              })) == null
              ? void 0
              : n.value;
        return r != null ? r : e;
      } catch (t) {
        return e;
      }
    }
    ((l.DAYS_IN_WEEK = c),
      (l.getAvailabilityForDay = d),
      (l.formatAvailability = m),
      (l.getTimeZoneAbbreviation = _));
  },
  226,
);
