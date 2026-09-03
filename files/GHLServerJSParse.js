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
      if (!(e == null || typeof e != "object"))
        for (var t = [e]; t.length > 0; ) {
          var n = t.pop();
          if (!(n == null || typeof n != "object")) {
            if (Array.isArray(n)) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o != null && typeof o == "object" && t.push(o);
              }
              continue;
            }
            n.__typename === c && (n.__typename = u);
            for (var a = Object.keys(n), i = 0; i < a.length; i++) {
              var l = n[a[i]];
              l != null && typeof l == "object" && t.push(l);
            }
          }
        }
    }
    function p(e) {
      var t = null,
        n = window.Env,
        a = n != null && "v9k2mt7q" in n,
        i = n != null && "d3hf9km2" in n,
        l = n != null && "k8pq2mnb" in n,
        s = n != null && "n5tq2wjb" in n,
        u = e;
      l && u != null && (u = d(u, s));
      var c =
          a &&
          (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() ||
            (i &&
              o(
                "GHLDetectionUtilsPreludeSafe",
              ).isJSONParseBehaviorallyShimmed())),
        p = n != null && "c6mw9qtk" in n,
        _ = n != null && "j6dw4ztx" in n,
        f = !1;
      if (
        p &&
        c &&
        u != null &&
        (!_ || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var g = JSON.parse('{"q7z":' + u + "}");
          g != null && g.q7z != null && ((t = g.q7z), (f = !0));
        } catch (e) {
          f = !1;
        }
      if (
        !f &&
        c &&
        n != null &&
        "x8kf2pw6" in n &&
        u != null &&
        (!_ || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var h = JSON.parse("[" + u + "]");
          Array.isArray(h) && h.length === 1 && ((t = h[0]), (f = !0));
        } catch (e) {
          f = !1;
        }
      if (!f && c)
        try {
          var y = o(
              "GHLDetectionUtilsPreludeSafe",
            ).isStringBehaviorallyShimmed(),
            C = n != null && "r4wt7kmj" in n;
          C && y && o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var b = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse(),
            v = !1;
          if (b != null)
            try {
              ((t = b(u)), (v = !0));
            } catch (e) {
              v = !1;
            }
          v || (t = r("json5").parse(u + " "));
        } catch (e) {
          (r("FBLogger")("ad_blocker_defense_ghost_owl")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to parse ServerJS payload using json5"),
            (t = JSON.parse(u)));
        }
      else f || (t = JSON.parse(u));
      return (
        l && t != null && m(t),
        t != null && o("GHLTypenameRestore").restoreAllTypenames(t),
        t
      );
    }
    l.ghlParseServerJSPayload = p;
  },
  98,
);
