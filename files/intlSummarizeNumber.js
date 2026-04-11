__d(
  "intlSummarizeNumber",
  [
    "FbtNumberType",
    "IntlCompactDecimalNumberFormatConfig",
    "IntlVariations",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 14,
      u = { ROUND: "ROUND", TRUNCATE: "TRUNCATE", NONE: "NONE" },
      c = { SHORT: "SHORT", LONG: "LONG", NONE: "NONE" },
      d = { ALWAYS_SHOW: "ALWAYS_SHOW", HIDE_IF_ZERO: "HIDE_IF_ZERO" };
    function m(e, t) {
      for (var n = t, r = e, o = n != null ? n : 0; o > 0; o--)
        (r % 1 === 0 && n != null && n--, (r *= 10));
      return n;
    }
    function p(t, n, o, a, i) {
      var l;
      (o === void 0 && (o = c.SHORT),
        a === void 0 && (a = u.ROUND),
        i === void 0 && (i = d.ALWAYS_SHOW));
      var p = r("IntlCompactDecimalNumberFormatConfig")[
          o === c.SHORT ? "short_patterns" : "long_patterns"
        ],
        f = t === 0 ? 0 : Math.floor(Math.log10(Math.abs(t)));
      f > s && (f = s);
      var g = a === u.NONE ? [t, n, !1] : _(t, f, n, a, p),
        h = g[0],
        y = g[1],
        C = g[2];
      if (C && a === u.ROUND) {
        f += 1;
        var b = _(t, f, n, a, p);
        ((h = b[0]), (y = b[1]), (C = b[2]));
      }
      var v =
          r("FbtNumberType").getVariation(h) ||
          r("IntlVariations").NUMBER_OTHER,
        S = f.toString(),
        R = p == null || (l = p[S]) == null ? void 0 : l[v.toString()];
      if (f < e && i === d.HIDE_IF_ZERO)
        return r("intlNumUtils").formatNumberWithThousandDelimiters(h, m(h, y));
      if (
        !R ||
        f < e ||
        (R.positive_prefix_pattern === "" && R.positive_suffix_pattern === "")
      ) {
        var L = n === void 0 ? 0 : n;
        return r("intlNumUtils").formatNumberWithThousandDelimiters(t, L);
      }
      return (
        i === d.HIDE_IF_ZERO && (y = m(h, y)),
        o === c.NONE
          ? r("intlNumUtils").formatNumberWithThousandDelimiters(h, y)
          : R && R.min_integer_digits === 0 && h === 1
            ? R.positive_prefix_pattern + R.positive_suffix_pattern
            : ((R && R.positive_prefix_pattern) || "") +
              r("intlNumUtils").formatNumberWithThousandDelimiters(h, y) +
              ((R && R.positive_suffix_pattern) || "")
      );
    }
    function _(e, t, n, o, a) {
      var i,
        l = t.toString(),
        c =
          a == null || (i = a[l]) == null
            ? void 0
            : i[r("IntlVariations").NUMBER_OTHER.toString()],
        d = (c && c.min_integer_digits) || t + 1,
        m = t - d + 1,
        p = Math.abs(e) / Math.pow(10, m),
        _ = n != null,
        f = _ ? n : c && c.min_fraction_digits;
      f == null && (f = t > 2 ? 1 : 0);
      var g =
          o === u.TRUNCATE
            ? r("intlNumUtils").truncateLongNumber(p.toString(), f)
            : p.toFixed(f),
        h = parseFloat(g) * (e < 0 ? -1 : 1);
      return [
        h,
        h % 1 === 0 && !_ ? 0 : f,
        g.length > d + (f > 0 ? f + 1 : 0) + (p >= 0 ? 0 : 1) && t < s,
      ];
    }
    l.default = p;
  },
  98,
);
