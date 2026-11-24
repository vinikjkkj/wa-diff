__d(
  "WAWebCustomerManagerDateFormatUtils",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (t == null || t === 0) return "\u2014";
      try {
        var n =
          e != null
            ? e
            : new Intl.DateTimeFormat(void 0, {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
        return ((e = n), n.format(t * 1e3));
      } catch (e) {
        return "\u2014";
      }
    }
    function d(e) {
      if (e == null || e === 0) return "\u2014";
      try {
        var t =
          s != null
            ? s
            : new Intl.DateTimeFormat(void 0, {
                day: "numeric",
                month: "short",
                timeZone: "UTC",
              });
        return ((s = t), t.format(e * 1e3));
      } catch (e) {
        return "\u2014";
      }
    }
    function m(e) {
      var t = r("WAWebL10N").getFullLocale(),
        n = u;
      return (
        (n == null || n.locale !== t) &&
          ((n = {
            formatter: new Intl.DateTimeFormat(t, {
              month: "long",
              timeZone: "UTC",
            }),
            locale: t,
          }),
          (u = n)),
        n.formatter.format(Date.UTC(2e3, e - 1, 1))
      );
    }
    ((l.formatCustomerDate = c),
      (l.formatCustomerBirthday = d),
      (l.formatBirthMonth = m));
  },
  98,
);
