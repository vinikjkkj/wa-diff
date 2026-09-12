__d(
  "GHLServerJSParse",
  [
    "FBLogger",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "getErrorSafe",
    "json5",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = '"__typename":"AdsSideFeedUnit"',
      s = '"__typename":"Q4xN7zP9aLbM3vT"',
      u = "AdsSideFeedUnit",
      c = "Q4xN7zP9aLbM3vT";
    function d(t, n) {
      if (!n) return t.split(e).join(s);
      var r = t.indexOf(e);
      if (r === -1) return t;
      for (var o = "", a = 0; r !== -1; )
        ((o += t.slice(a, r) + s), (a = r + e.length), (r = t.indexOf(e, a)));
      return o + t.slice(a);
    }
    function m(e) {
      var t = null,
        n = window.Env,
        a = n != null && "v9k2mt7q" in n,
        i = n != null && "d3hf9km2" in n,
        l = n != null && "k8pq2mnb" in n,
        s = n != null && "n5tq2wjb" in n,
        m = e;
      l && m != null && (m = d(m, s));
      var p =
          a &&
          (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() ||
            (i &&
              o(
                "GHLDetectionUtilsPreludeSafe",
              ).isJSONParseBehaviorallyShimmed())),
        _ = n != null && "c6mw9qtk" in n,
        f = n != null && "j6dw4ztx" in n,
        g = !1;
      if (
        _ &&
        p &&
        m != null &&
        (!f || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var h = JSON.parse('{"q7z":' + m + "}");
          h != null && h.q7z != null && ((t = h.q7z), (g = !0));
        } catch (e) {
          g = !1;
        }
      if (
        !g &&
        p &&
        n != null &&
        "x8kf2pw6" in n &&
        m != null &&
        (!f || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var y = JSON.parse("[" + m + "]");
          Array.isArray(y) && y.length === 1 && ((t = y[0]), (g = !0));
        } catch (e) {
          g = !1;
        }
      if (!g && p)
        try {
          var C = o(
              "GHLDetectionUtilsPreludeSafe",
            ).isStringBehaviorallyShimmed(),
            b = n != null && "r4wt7kmj" in n;
          b && C && o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var v = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse(),
            S = !1;
          if (v != null)
            try {
              ((t = v(m)), (S = !0));
            } catch (e) {
              S = !1;
            }
          S || (t = r("json5").parse(m + " "));
        } catch (e) {
          (r("FBLogger")("ad_blocker_defense_ghost_owl")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to parse ServerJS payload using json5"),
            (t = JSON.parse(m)));
        }
      else g || (t = JSON.parse(m));
      return (
        l &&
          t != null &&
          m.indexOf(c) !== -1 &&
          o("GHLTypenameRestore").restoreTypenameValues(t, c, u),
        t != null && o("GHLTypenameRestore").restoreAllTypenames(t, m),
        t
      );
    }
    l.ghlParseServerJSPayload = m;
  },
  98,
);
