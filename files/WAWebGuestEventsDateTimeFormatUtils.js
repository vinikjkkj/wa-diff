__d(
  "WAWebGuestEventsDateTimeFormatUtils",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = s(e),
        o = t != null ? s(t) : null,
        a = o != null && !p(r, o);
      return {
        dateLine: a ? d(r) : c(r),
        endDateLine: a && o != null ? d(o) : null,
        isMultiDay: a,
        startTime: m(r, n),
        endTime: o != null ? m(o, n) : null,
      };
    }
    function s(e) {
      return new Date(e * 1e3);
    }
    function u() {
      return r("WAWebL10N").getFullLocale();
    }
    function c(e) {
      return new Intl.DateTimeFormat(u(), {
        weekday: "long",
        month: "long",
        day: "numeric",
      }).format(e);
    }
    function d(e) {
      return new Intl.DateTimeFormat(u(), {
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(e);
    }
    function m(e, t) {
      return new Intl.DateTimeFormat(
        u(),
        babelHelpers.extends(
          { hour: "numeric", minute: "2-digit" },
          t != null ? { hourCycle: t ? "h12" : "h23" } : null,
        ),
      ).format(e);
    }
    function p(e, t) {
      return (
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate()
      );
    }
    l.getGuestEventDateTimeFormat = e;
  },
  98,
);
