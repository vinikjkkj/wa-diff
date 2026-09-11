__d(
  "WAWebBizAiBookingTime",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = {
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        month: "short",
        weekday: "short",
      };
    function u(t, n, r) {
      if (t == null) return null;
      var o = new Date(t * e),
        a = n == null ? null : new Date(n * e),
        i =
          o.getFullYear() === new Date().getFullYear()
            ? s
            : babelHelpers.extends({}, s, { year: "numeric" }),
        l =
          r != null && r !== ""
            ? c(o, a, babelHelpers.extends({}, i, { timeZone: r }))
            : null;
      return l != null ? l : c(o, a, i);
    }
    function c(e, t, n) {
      try {
        var o = new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), n);
        return t == null ? o.format(e) : o.formatRange(e, t);
      } catch (e) {
        return null;
      }
    }
    l.formatBookingWindow = u;
  },
  98,
);
