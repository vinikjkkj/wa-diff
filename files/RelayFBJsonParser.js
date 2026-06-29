__d(
  "RelayFBJsonParser",
  [
    "ExecutionEnvironment",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "cr:7329",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        parse: function (a) {
          r("gkx")("23983") &&
            r("justknobx")._("5588") &&
            o("GHLDetectionUtils").isStringShimmed() &&
            o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var t =
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              r("gkx")("15342") &&
              r("justknobx")._("566"),
            i;
          return (
            n("cr:7329") &&
            (t
              ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
              : o("GHLDetectionUtils").isJSONParseShimmed())
              ? (i = n("cr:7329").parse(a))
              : (i = JSON.parse(a)),
            i != null && o("GHLTypenameRestore").restoreAllTypenames(i, a),
            i
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
