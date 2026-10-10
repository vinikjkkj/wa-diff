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
    function s(e) {
      var t = /\S/.exec(e);
      return t != null && (e[t.index] === "{" || e[t.index] === "[")
        ? e.slice(0, t.index + 1) + "/*x*/" + e.slice(t.index + 1)
        : "/*x*/" + e;
    }
    function u(t) {
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
        u =
          (a
            ? o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed()
            : o("GHLDetectionUtils").isJSONParseShimmed()) ||
          (i &&
            o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed()),
        c,
        d = !1;
      if (
        u &&
        r("gkx")("23657") &&
        r("justknobx")._("5765") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var m = JSON.parse('{"q7z":' + t + "}");
          m != null && m.q7z != null && ((c = m.q7z), (d = !0));
        } catch (e) {
          d = !1;
        }
      if (
        !d &&
        u &&
        r("gkx")("13760") &&
        r("justknobx")._("5738") &&
        (!l || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var p = JSON.parse("[" + t + "]");
          Array.isArray(p) && p.length === 1 && ((c = p[0]), (d = !0));
        } catch (e) {
          d = !1;
        }
      if (!d && u) {
        var _ = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
        if (_ != null)
          try {
            ((c = _(t)), (d = !0));
          } catch (e) {
            d = !1;
          }
        if (!d && n("cr:7329"))
          try {
            ((c = n("cr:7329").fromChunk(s(t))), (d = !0));
          } catch (e) {
            (r("FBLogger")("ad_blocker_defense_ghost_owl")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to parse Relay response using json5"),
              (d = !1));
          }
      }
      return (
        d || (c = JSON.parse(t)),
        c != null && o("GHLTypenameRestore").restoreAllTypenames(c, t),
        c
      );
    }
    l.ghlParseRelayResponse = u;
  },
  98,
);
