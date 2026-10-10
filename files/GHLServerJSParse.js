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
      var t = /\S/.exec(e);
      return t != null && (e[t.index] === "{" || e[t.index] === "[")
        ? e.slice(0, t.index + 1) + "/*x*/" + e.slice(t.index + 1)
        : "/*x*/" + e;
    }
    function p(e) {
      var t = null,
        n = window.Env,
        a = n != null && "v9k2mt7q" in n,
        i = n != null && "d3hf9km2" in n,
        l = n != null && "k8pq2mnb" in n,
        s = n != null && "n5tq2wjb" in n,
        p = e;
      l && p != null && (p = d(p, s));
      var _ =
          a &&
          (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() ||
            (i &&
              o(
                "GHLDetectionUtilsPreludeSafe",
              ).isJSONParseBehaviorallyShimmed())),
        f = n != null && "c6mw9qtk" in n,
        g = n != null && "j6dw4ztx" in n,
        h = !1;
      if (
        f &&
        _ &&
        p != null &&
        (!g || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var y = JSON.parse('{"q7z":' + p + "}");
          y != null && y.q7z != null && ((t = y.q7z), (h = !0));
        } catch (e) {
          h = !1;
        }
      if (
        !h &&
        _ &&
        n != null &&
        "x8kf2pw6" in n &&
        p != null &&
        (!g || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var C = JSON.parse("[" + p + "]");
          Array.isArray(C) && C.length === 1 && ((t = C[0]), (h = !0));
        } catch (e) {
          h = !1;
        }
      if (!h && _)
        try {
          var b = o(
              "GHLDetectionUtilsPreludeSafe",
            ).isStringBehaviorallyShimmed(),
            v = n != null && "r4wt7kmj" in n;
          v && b && o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var S = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse(),
            R = !1;
          if (S != null)
            try {
              ((t = S(p)), (R = !0));
            } catch (e) {
              R = !1;
            }
          R || (t = r("json5").fromChunk(m(p)));
        } catch (e) {
          (r("FBLogger")("ad_blocker_defense_ghost_owl")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to parse ServerJS payload using json5"),
            (t = JSON.parse(p)));
        }
      else h || (t = JSON.parse(p));
      return (
        l &&
          t != null &&
          p.indexOf(c) !== -1 &&
          o("GHLTypenameRestore").restoreTypenameValues(t, c, u),
        t != null && o("GHLTypenameRestore").restoreAllTypenames(t, p),
        t
      );
    }
    l.expandBootPayload = p;
  },
  98,
);
