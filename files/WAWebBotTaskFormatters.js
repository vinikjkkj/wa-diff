__d(
  "WAWebBotTaskFormatters",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      if (e == null || e === "") return null;
      var n = new Date(e);
      if (Number.isNaN(n.getTime())) return null;
      var o = r("WAWebL10N").getFullLocale();
      try {
        return new Intl.DateTimeFormat(
          o,
          babelHelpers.extends({}, u, { timeZone: t != null ? t : void 0 }),
        ).format(n);
      } catch (e) {
        return new Intl.DateTimeFormat(o, u).format(n);
      }
    }
    var u = {
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      month: "long",
      timeZoneName: "short",
      weekday: "long",
      year: "numeric",
    };
    function c(e, t) {
      if (e == null || e === "") return s._(/*BTDS*/ "One time").toString();
      var n = e.toUpperCase(),
        r = Math.max(t != null ? t : 1, 1),
        o = r > 1 ? d(n, r) : m(n);
      return o != null ? o.toString() : null;
    }
    function d(e, t) {
      return e === "HOURLY"
        ? s._(/*BTDS*/ '_j{"*":"Every {count} hours","_1":"Every 1 hour"}', [
            s._plural(t, "count"),
          ])
        : e === "DAILY"
          ? s._(/*BTDS*/ '_j{"*":"Every {count} days","_1":"Every 1 day"}', [
              s._plural(t, "count"),
            ])
          : e === "WEEKLY"
            ? s._(
                /*BTDS*/ '_j{"*":"Every {count} weeks","_1":"Every 1 week"}',
                [s._plural(t, "count")],
              )
            : e === "MONTHLY"
              ? s._(
                  /*BTDS*/ '_j{"*":"Every {count} months","_1":"Every 1 month"}',
                  [s._plural(t, "count")],
                )
              : null;
    }
    function m(e) {
      return e === "HOURLY"
        ? s._(/*BTDS*/ "Hourly")
        : e === "DAILY"
          ? s._(/*BTDS*/ "Daily")
          : e === "WEEKLY"
            ? s._(/*BTDS*/ "Weekly")
            : e === "MONTHLY"
              ? s._(/*BTDS*/ "Monthly")
              : null;
    }
    ((l.formatTaskSchedule = e), (l.formatTaskFrequency = c));
  },
  226,
);
