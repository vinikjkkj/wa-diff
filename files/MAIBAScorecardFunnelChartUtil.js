__d(
  "MAIBAScorecardFunnelChartUtil",
  [
    "AdsAccountStore",
    "AdsCurrencyFormatter",
    "ads-lib-formatters",
    "intlSummarizeNumber",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ads-lib-formatters").createIntlPercentFormatter(2, !1);
    function s(t) {
      if (t != null) {
        var n = t.toUpperCase();
        if (n === "CURRENCY") {
          var a,
            i = r("AdsAccountStore").getSelectedAccount().getValue(),
            l = (a = i == null ? void 0 : i.currency) != null ? a : "USD";
          return function (e) {
            var t =
              Math.abs(e) >= 1e3
                ? r("intlSummarizeNumber")(Math.abs(e), 1)
                : Number.isInteger(e)
                  ? e.toFixed(0)
                  : e.toFixed(2);
            return r("AdsCurrencyFormatter").replaceWithSymbol(l, t);
          };
        }
        if (n === "PERCENTAGE")
          return function (t) {
            return String(e(t));
          };
        if (n === "INT" || n === "INTEGER")
          return function (e) {
            if (Math.abs(e) >= 1e3)
              return r("intlSummarizeNumber")(Math.abs(e), 1);
            var t = o("ads-lib-formatters").createIntlNumberFormatter(0);
            return String(t(e));
          };
        if (n === "FLOAT")
          return function (e) {
            if (Math.abs(e) >= 1e3)
              return r("intlSummarizeNumber")(Math.abs(e), 1);
            var t = o("ads-lib-formatters").createIntlNumberFormatter(2);
            return String(t(e));
          };
      }
    }
    function u(e, t, n) {
      if (e.length === 0 || t.length === 0) return { columns: [], maxValue: 0 };
      var r = e[n],
        o = s(r == null ? void 0 : r.type),
        a = new Map(),
        i = [],
        l = 0;
      for (var u of t) {
        var c,
          d,
          m,
          p,
          _ = u.values,
          f = (c = _[0]) != null ? c : "",
          g = (d = _[1]) != null ? d : "",
          h = (m = _[n + 2]) != null ? m : "",
          y = _.slice(2).some(function (e) {
            return e != null && e !== "";
          }),
          C = y ? "active" : "missing",
          b =
            (C === "active" &&
              h !== "" &&
              parseFloat(h.replace(/[^0-9.\-]/g, ""))) ||
            0;
        C === "active" && b > l && (l = b);
        var v = C === "active" && h !== "" && o != null ? String(o(b)) : h;
        (a.has(f) || (a.set(f, []), i.push(f)),
          (p = a.get(f)) == null ||
            p.push({
              audienceType: g,
              formattedValue: v,
              numericValue: b,
              status: C,
            }));
      }
      var S = i.map(function (e) {
        var t;
        return { header: e, rows: (t = a.get(e)) != null ? t : [] };
      });
      return { columns: S, maxValue: l };
    }
    l.parseFunnelData = u;
  },
  98,
);
