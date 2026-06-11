__d(
  "RelayFBJsonParser",
  [
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "cr:7329",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        parse: function (t) {
          r("gkx")("23983") &&
            r("justknobx")._("5588") &&
            o("GHLDetectionUtils").isStringShimmed() &&
            o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var e;
          return (
            n("cr:7329") && o("GHLDetectionUtils").isJSONParseShimmed()
              ? (e = n("cr:7329").parse(t))
              : (e = JSON.parse(t)),
            e != null && o("GHLTypenameRestore").restoreAllTypenames(e, t),
            e
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
