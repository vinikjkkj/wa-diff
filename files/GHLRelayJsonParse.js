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
        l = r("gkx")("11953") && r("justknobx")._("5807"),
        s =
          (a
            ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
            : o("GHLDetectionUtils").isJSONParseShimmed()) ||
          (i &&
            o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed()),
        u,
        c = !1;
      if (
        s &&
        r("gkx")("23657") &&
        r("justknobx")._("5765") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var d = JSON.parse('{"q7z":' + t + "}");
          d != null && d.q7z != null && ((u = d.q7z), (c = !0));
        } catch (e) {
          c = !1;
        }
      if (
        !c &&
        s &&
        r("gkx")("13760") &&
        r("justknobx")._("5738") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var m = JSON.parse("[" + t + "]");
          Array.isArray(m) && m.length === 1 && ((u = m[0]), (c = !0));
        } catch (e) {
          c = !1;
        }
      if (!c && s) {
        var p = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
        if (p != null)
          try {
            ((u = p(t)), (c = !0));
          } catch (e) {
            c = !1;
          }
        if (!c && n("cr:7329"))
          try {
            ((u = n("cr:7329").parse(t + " ")), (c = !0));
          } catch (e) {
            (r("FBLogger")("ad_blocker_defense_ghost_owl")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to parse Relay response using json5"),
              (c = !1));
          }
      }
      return (
        c || (u = JSON.parse(t)),
        u != null && o("GHLTypenameRestore").restoreAllTypenames(u, t),
        u
      );
    }
    l.ghlParseRelayResponse = s;
  },
  98,
);
