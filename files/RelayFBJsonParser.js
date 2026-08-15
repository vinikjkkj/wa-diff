__d(
  "RelayFBJsonParser",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "cr:7329",
    "getErrorSafe",
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
          if (l && n("cr:7329"))
            try {
              s = n("cr:7329").parse(a + " ");
            } catch (e) {
              (r("FBLogger")("ad_blocker_defense_ghost_owl")
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to parse Relay response using json5"),
                (s = JSON.parse(a)));
            }
          else s = JSON.parse(a);
          return (
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
