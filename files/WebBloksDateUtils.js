__d(
  "WebBloksDateUtils",
  ["WebBloksI18nUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        short: { year: "2-digit", month: "numeric", day: "numeric" },
        medium: { year: "numeric", month: "short", day: "numeric" },
        long: { year: "numeric", month: "long", day: "numeric" },
        full: {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      },
      s = {
        short: { hour: "numeric", minute: "2-digit" },
        medium: { hour: "numeric", minute: "numeric", second: "numeric" },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "long",
        },
      };
    function u(t, n, r) {
      return t === "date"
        ? babelHelpers.extends({}, e[n])
        : t === "time"
          ? babelHelpers.extends({}, s[r != null ? r : n])
          : babelHelpers.extends({}, e[n], s[r != null ? r : n]);
    }
    function c(e, t, n, r, a, i) {
      var l = e * 1e3;
      if (!Number.isFinite(l)) return null;
      var s;
      return (
        Array.isArray(t)
          ? (s = [].concat(t))
          : (s = o("WebBloksI18nUtils").toBrowserLocaleFormat(t)),
        new Intl.DateTimeFormat(
          s,
          babelHelpers.extends({}, u(n, r, a), { timezone: i }),
        ).format(e * 1e3)
      );
    }
    l.getDateTimeText = c;
  },
  98,
);
