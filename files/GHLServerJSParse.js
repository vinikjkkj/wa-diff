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
        p = !1;
      if (c && n != null && "x8kf2pw6" in n && u != null)
        try {
          var _ = JSON.parse("[" + u + "]");
          Array.isArray(_) && _.length === 1 && ((t = _[0]), (p = !0));
        } catch (e) {
          p = !1;
        }
      if (!p && c)
        try {
          var f = o(
              "GHLDetectionUtilsPreludeSafe",
            ).isStringBehaviorallyShimmed(),
            g = n != null && "r4wt7kmj" in n;
          g && f && o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var h = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse(),
            y = !1;
          if (h != null)
            try {
              ((t = h(u)), (y = !0));
            } catch (e) {
              y = !1;
            }
          y || (t = r("json5").parse(u + " "));
        } catch (e) {
          (r("FBLogger")("ad_blocker_defense_ghost_owl")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to parse ServerJS payload using json5"),
            (t = JSON.parse(u)));
        }
      else p || (t = JSON.parse(u));
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
