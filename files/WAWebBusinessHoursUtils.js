__d(
  "WAWebBusinessHoursUtils",
  [
    "fbt",
    "WAWebBusinessProfileTypes",
    "WAWebSmbUtilsTimeUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t) {
        return o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t) !== void 0;
      },
      u = function (n, r) {
        if (
          n ===
          o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS
        )
          for (var t in r) {
            var a = r[t],
              i = a.closed,
              l = a.hours;
            if (!i)
              for (var s of l) {
                var u = s[0],
                  c = s[1];
                if (!e(u) || !e(c)) return !1;
              }
          }
        return !0;
      },
      c = function (t) {
        var e = t.dayValues,
          n = t.mode,
          a = t.note,
          i = t.timezone,
          l = {};
        for (var s in e) {
          var u = e[s],
            c = u.closed,
            d = u.hours;
          if (!c && o("WAWebBusinessProfileTypes").isBusinessHoursDayName(s)) {
            var m = { mode: n };
            (n ===
              o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                .SPECIFIC_HOURS &&
              (m.hours = d.map(function (e) {
                var t = e[0],
                  n = e[1];
                return [
                  o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t) || 0,
                  o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(n) || 0,
                ];
              })),
              (l[s] = m));
          }
        }
        var p = r("isStringNullOrEmpty")(i)
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : i;
        return { businessHours: { config: l, note: a, timezone: p } };
      },
      d = 540,
      m = 1080,
      p = function () {
        return [
          o("WAWebSmbUtilsTimeUtils").minutesToTime(d),
          o("WAWebSmbUtilsTimeUtils").minutesToTime(m),
        ];
      };
    function _(e) {
      if (!e || e.length === 0) return "";
      var t = e[0],
        n = t[0],
        r = t[1];
      return n + " - " + r + " temporary change";
    }
    function f(e, t) {
      return t.closed
        ? s._(/*BTDS*/ "Closed")
        : e === "specific_hours"
          ? _(t.hours)
          : e === "open_24h"
            ? s._(/*BTDS*/ "Open 24 hours")
            : e === "appointment_only"
              ? s._(/*BTDS*/ "By appointment only")
              : "";
    }
    function g(e) {
      return e === "specific_hours"
        ? s._(/*BTDS*/ "Open for selected hours")
        : e === "open_24h"
          ? s._(/*BTDS*/ "Always open")
          : e === "appointment_only"
            ? s._(/*BTDS*/ "By appointment only")
            : s._(/*BTDS*/ "Select mode");
    }
    ((l.isValidTime = e),
      (l.isValidBusinessHours = u),
      (l.convertToRawBusinessProfile = c),
      (l.getDefaultHoursPair = p),
      (l.getStatusText = f),
      (l.getModeDisplayName = g));
  },
  226,
);
