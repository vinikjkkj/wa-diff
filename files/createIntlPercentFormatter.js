__d(
  "createIntlPercentFormatter",
  ["NumberFormatConfig", "adsLibFormatNumber"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t === !1 ? 1 : 100;
      return function (t) {
        return (
          r("adsLibFormatNumber")(
            (t != null ? t : 0) * n,
            e || 0,
            o("NumberFormatConfig").numberDelimiter,
            o("NumberFormatConfig").decimalSeparator,
          ) + "%"
        );
      };
    }
    l.default = e;
  },
  98,
);
