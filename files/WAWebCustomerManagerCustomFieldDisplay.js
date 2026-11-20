__d(
  "WAWebCustomerManagerCustomFieldDisplay",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\u2014",
      l,
      s,
      u = new Map();
    function c(t, n) {
      var r;
      if (t == null) return e;
      var o =
        t.fieldType === "DATE"
          ? p(t.dateValue)
          : t.fieldType === "NUMERIC"
            ? _(t.numericValue)
            : t.fieldType === "MONEY"
              ? f(t.moneyAmount, t.currencyDecimalPlaces)
              : t.fieldType === "ENUM"
                ? (r = m(t, n)) != null
                  ? r
                  : e
                : null;
      return o != null ? o : t.value !== "" ? t.value : e;
    }
    function d(e) {
      var t;
      return (t = p(e)) != null ? t : e;
    }
    function m(e, t) {
      var n = e.enumOptionKey;
      if (n == null) return null;
      var r = t != null ? t : e,
        o = r.enumValues[r.enumOptionKeys.indexOf(n)];
      return o != null && o !== "" ? o : null;
    }
    function p(e) {
      var t = e == null ? void 0 : e.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (t == null) return null;
      var n = Number(t[2]) - 1,
        r = Number(t[3]),
        o = Date.UTC(Number(t[1]), n, r),
        a = new Date(o);
      if (a.getUTCMonth() !== n || a.getUTCDate() !== r) return null;
      var i =
        l != null
          ? l
          : new Intl.DateTimeFormat(void 0, {
              day: "numeric",
              month: "short",
              timeZone: "UTC",
              year: "numeric",
            });
      return ((l = i), i.format(o));
    }
    function _(e) {
      if (e == null) return null;
      var t =
        s != null
          ? s
          : new Intl.NumberFormat(void 0, { maximumFractionDigits: 20 });
      return ((s = t), t.format(e));
    }
    function f(e, t) {
      var n;
      if (e == null || t == null || !Number.isInteger(t) || t < 0 || t > 20)
        return null;
      var r =
        (n = u.get(t)) != null
          ? n
          : new Intl.NumberFormat(void 0, {
              maximumFractionDigits: t,
              minimumFractionDigits: t,
            });
      return (u.set(t, r), r.format(e / Math.pow(10, t)));
    }
    ((i.formatCustomFieldDisplayValue = c),
      (i.formatCustomFieldDate = d),
      (i.getEnumOptionLabel = m));
  },
  66,
);
