__d(
  "GHLRelayJsonParse",
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
    var e;
    function s(t) {
      r("gkx")("23983") &&
        r("justknobx")._("5588") &&
        o("GHLDetectionUtilsPreludeSafe").isStringBehaviorallyShimmed() &&
        o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
      var a =
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          r("gkx")("15342") &&
          r("justknobx")._("566"),
        i =
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          r("gkx")("10092") &&
          r("justknobx")._("3838"),
        l =
          (a
            ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
            : o("GHLDetectionUtils").isJSONParseShimmed()) ||
          (i &&
            o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed()),
        s,
        u = !1;
      if (l) {
        var c = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
        if (c != null)
          try {
            ((s = c(t)), (u = !0));
          } catch (e) {
            u = !1;
          }
        if (!u && n("cr:7329"))
          try {
            ((s = n("cr:7329").parse(t + " ")), (u = !0));
          } catch (e) {
            (r("FBLogger")("ad_blocker_defense_ghost_owl")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to parse Relay response using json5"),
              (u = !1));
          }
      }
      return (
        u || (s = JSON.parse(t)),
        s != null && o("GHLTypenameRestore").restoreAllTypenames(s, t),
        s
      );
    }
    l.ghlParseRelayResponse = s;
  },
  98,
);
