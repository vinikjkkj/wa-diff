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
            o("GHLDetectionUtilsPreludeSafe").isStringBehaviorallyShimmed() &&
            o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var t =
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              r("gkx")("15342") &&
              r("justknobx")._("566"),
            i =
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              r("gkx")("10092") &&
              r("justknobx")._("3838"),
            l =
              (t
                ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
                : o("GHLDetectionUtils").isJSONParseShimmed()) ||
              (i &&
                o(
                  "GHLDetectionUtilsPreludeSafe",
                ).isJSONParseBehaviorallyShimmed()),
            s;
          return (
            l && n("cr:7329")
              ? (s = n("cr:7329").parse(a))
              : (s = JSON.parse(a)),
            s != null && o("GHLTypenameRestore").restoreAllTypenames(s, a),
            s
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
