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
    function s() {
      return (
        typeof window != "undefined" &&
        window.Env != null &&
        "rk21poeg" in window.Env
      );
    }
    function u(e, t) {
      return (t ? "\v" : "\uFEFF") + e;
    }
    function c(t) {
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
        c =
          (a
            ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
            : o("GHLDetectionUtils").isJSONParseShimmed()) ||
          (i &&
            o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed()),
        d,
        m = !1;
      if (
        c &&
        r("gkx")("23657") &&
        r("justknobx")._("5765") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var p = JSON.parse('{"q7z":' + t + "}");
          p != null && p.q7z != null && ((d = p.q7z), (m = !0));
        } catch (e) {
          m = !1;
        }
      if (
        !m &&
        c &&
        r("gkx")("13760") &&
        r("justknobx")._("5738") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var _ = JSON.parse("[" + t + "]");
          Array.isArray(_) && _.length === 1 && ((d = _[0]), (m = !0));
        } catch (e) {
          m = !1;
        }
      if (!m && c) {
        var f = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
        if (f != null)
          try {
            ((d = f(t)), (m = !0));
          } catch (e) {
            m = !1;
          }
        if (!m && n("cr:7329"))
          try {
            var g = s(),
              h = u(t, g);
            ((d = g ? n("cr:7329").fromScrap(h) : n("cr:7329").fromFragment(h)),
              (m = !0));
          } catch (e) {
            (r("FBLogger")("ad_blocker_defense_ghost_owl")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to parse Relay response using json5"),
              (m = !1));
          }
      }
      return (
        m || (d = JSON.parse(t)),
        d != null && o("GHLTypenameRestore").restoreAllTypenames(d, t),
        d
      );
    }
    l.ghlParseRelayResponse = c;
  },
  98,
);
