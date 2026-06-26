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
          var e = r("gkx")("15342") && r("justknobx")._("566"),
            a;
          return (
            n("cr:7329") &&
            (e
              ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
              : o("GHLDetectionUtils").isJSONParseShimmed())
              ? (a = n("cr:7329").parse(t))
              : (a = JSON.parse(t)),
            a != null && o("GHLTypenameRestore").restoreAllTypenames(a, t),
            a
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
