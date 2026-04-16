__d(
  "RelayFBJsonParser",
  [
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "cr:7329",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        parse: function (t) {
          return (
            r("gkx")("23983") &&
              r("justknobx")._("5588") &&
              o("GHLDetectionUtils").isStringShimmed() &&
              o("GHLDetectionUtilsPreludeSafe").restoreNativeString(),
            n("cr:7329") && o("GHLDetectionUtils").isJSONParseShimmed()
              ? n("cr:7329").parse(t)
              : JSON.parse(t)
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
