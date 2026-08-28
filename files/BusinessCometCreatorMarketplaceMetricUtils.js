__d(
  "BusinessCometCreatorMarketplaceMetricUtils",
  ["fbt", "intlSummarizeNumber"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "\u2013\u2013";
    function u(t, n, o, a, i) {
      if (
        (n === void 0 && (n = !1),
        o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = 1),
        t == null)
      )
        return e;
      if (n) {
        var l = a && t > 1e3,
          u = l ? 1e3 : t,
          c = r("intlSummarizeNumber")(
            Number(u),
            i,
            "SHORT",
            "ROUND",
            "HIDE_IF_ZERO",
          );
        return l
          ? s._(
              /*BTDS*/ "+{Number represented in percentage format (e.g. 45\u0025)}\u0025",
              [
                s._param(
                  "Number represented in percentage format (e.g. 45%)",
                  c,
                ),
              ],
            )
          : s._(
              /*BTDS*/ "{Number represented in percentage format (e.g. 45\u0025)}\u0025",
              [
                s._param(
                  "Number represented in percentage format (e.g. 45%)",
                  c,
                ),
              ],
            );
      } else {
        var d = o || Number(t) >= 1e4;
        return r("intlSummarizeNumber")(
          Number(t),
          d ? i : 0,
          d ? "SHORT" : "NONE",
          d ? "TRUNCATE" : "NONE",
          "HIDE_IF_ZERO",
        );
      }
    }
    l.formatMetricValue = u;
  },
  226,
);
