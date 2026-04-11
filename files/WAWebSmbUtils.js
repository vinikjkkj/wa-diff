__d(
  "WAWebSmbUtils",
  [
    "fbt",
    "WAWeb-moment",
    "WAWebBusinessProfileTypes",
    "WAWebSmbUtilsTimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case 0:
          return s._(/*BTDS*/ "Sunday").toString();
        case 1:
          return s._(/*BTDS*/ "Monday").toString();
        case 2:
          return s._(/*BTDS*/ "Tuesday").toString();
        case 3:
          return s._(/*BTDS*/ "Wednesday").toString();
        case 4:
          return s._(/*BTDS*/ "Thursday").toString();
        case 5:
          return s._(/*BTDS*/ "Friday").toString();
        case 6:
          return s._(/*BTDS*/ "Saturday").toString();
        default:
          throw r("err")("Invalid day number: " + e);
      }
    }
    function u(e, t) {
      switch (e == null ? void 0 : e.mode) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
          return t
            ? d(e == null ? void 0 : e.hours)
            : c(e == null ? void 0 : e.hours);
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return s._(/*BTDS*/ "By appointment only");
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return s._(/*BTDS*/ "Open 24 hours");
        default:
          return s._(/*BTDS*/ "Closed");
      }
    }
    function c(e) {
      return e
        ? e
            .map(function (e) {
              return e
                .map(o("WAWebSmbUtilsTimeUtils").minutesToTime)
                .join(" - ");
            })
            .join("\n")
        : "";
    }
    function d(e) {
      if ((e == null ? void 0 : e.length) === 1)
        return e[0].map(o("WAWebSmbUtilsTimeUtils").minutesToTime).join(" - ");
      if ((e == null ? void 0 : e.length) === 2) {
        var t,
          n = (t = o("WAWebSmbUtilsTimeUtils")).minutesToTime(e[0][0]),
          r = t.minutesToTime(e[0][1]),
          a = t.minutesToTime(e[1][0]),
          i = t.minutesToTime(e[1][1]);
        return s._(
          /*BTDS*/ "{openTime} - {closeTime} and {additionalOpenTime} - {additionalCloseTime}",
          [
            s._param("openTime", n),
            s._param("closeTime", r),
            s._param("additionalOpenTime", a),
            s._param("additionalCloseTime", i),
          ],
        );
      }
      return "";
    }
    function m(t, n) {
      var r = t.config,
        a = new Date().getDay(),
        i = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.map(function (t, i) {
          var l = (a + i) % o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.length,
            s = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[l],
            c = e(l),
            d = u(r[s], n).toString();
          return { day: c, first: i === 0, hours: d };
        });
      return i;
    }
    function p(t) {
      var n = t == null ? {} : t.config,
        a = t || {},
        i = a.note,
        l = a.timezone,
        s,
        u = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.map(function (t, r) {
          var a = n[t],
            i = !a,
            l = e(r),
            u;
          return (
            a &&
              ((s = a.mode),
              a.hours &&
                (u = a.hours.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [
                    o("WAWebSmbUtilsTimeUtils").minutesToTime(t),
                    o("WAWebSmbUtilsTimeUtils").minutesToTime(n),
                  ];
                }))),
            { closed: i, dayKey: t, dayName: l, hours: u }
          );
        }),
        c = r("WAWeb-moment").localeData().firstDayOfWeek(),
        d = u.splice(c),
        m = [].concat(d, u);
      return { days: m, mode: s, note: i, timezone: l };
    }
    ((l.getBusinessHours = m), (l.getBusinessHoursForEdit = p));
  },
  226,
);
