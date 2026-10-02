__d(
  "WAWebCustomerManagerDateFormatUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l, s;
    function u(t) {
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
    function c(e) {
      if (e == null || e === 0) return "\u2014";
      try {
        var t =
          l != null
            ? l
            : new Intl.DateTimeFormat(void 0, {
                day: "numeric",
                month: "short",
                timeZone: "UTC",
                year: "numeric",
              });
        return ((l = t), t.format(e * 1e3));
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
    ((i.formatCustomerDate = u),
      (i.formatCustomerDateOnly = c),
      (i.formatCustomerBirthday = d));
  },
  66,
);
