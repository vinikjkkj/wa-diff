__d(
  "createIntlPercentFbtFormatter",
  ["fbt", "NumberFormatConfig", "adsLibFormatNumber"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = t === !1 ? 1 : 100;
      return function (t) {
        return s._(
          /*BTDS*/ "{the value of the percentage as a localized number, for example 75 or 21.25}\u0025",
          [
            s._param(
              "the value of the percentage as a localized number, for example 75 or 21.25",
              r("adsLibFormatNumber")(
                (t != null ? t : 0) * n,
                e || 0,
                o("NumberFormatConfig").numberDelimiter,
                o("NumberFormatConfig").decimalSeparator,
              ),
            ),
          ],
        );
      };
    }
    l.default = e;
  },
  226,
);
