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
    function m(e, t) {
      return (t ? "\v" : "\uFEFF") + e;
    }
    function p(e) {
      var t = null,
        n = window.Env,
        a = n != null && "rk21poeg" in n,
        i = n != null && "v9k2mt7q" in n,
        l = n != null && "d3hf9km2" in n,
        s = n != null && "k8pq2mnb" in n,
        p = n != null && "n5tq2wjb" in n,
        _ = e;
      s && _ != null && (_ = d(_, p));
      var f =
          i &&
          (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() ||
            (l &&
              o(
                "GHLDetectionUtilsPreludeSafe",
              ).isJSONParseBehaviorallyShimmed())),
        g = n != null && "c6mw9qtk" in n,
        h = n != null && "j6dw4ztx" in n,
        y = !1;
      if (
        g &&
        f &&
        _ != null &&
        (!h || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())
      )
        try {
          var C = JSON.parse('{"q7z":' + _ + "}");
          C != null && C.q7z != null && ((t = C.q7z), (y = !0));
        } catch (e) {
          y = !1;
        }
      if (
        !y &&
        f &&
        n != null &&
        "x8kf2pw6" in n &&
        _ != null &&
        (!h || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())
      )
        try {
          var b = JSON.parse("[" + _ + "]");
          Array.isArray(b) && b.length === 1 && ((t = b[0]), (y = !0));
        } catch (e) {
          y = !1;
        }
      if (!y && f)
        try {
          var v = o(
              "GHLDetectionUtilsPreludeSafe",
            ).isStringBehaviorallyShimmed(),
            S = n != null && "r4wt7kmj" in n;
          S && v && o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
          var R = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse(),
            L = !1;
          if (R != null)
            try {
              ((t = R(_)), (L = !0));
            } catch (e) {
              L = !1;
            }
          if (!L) {
            var E = m(_, a);
            t = a ? r("json5").fromScrap(E) : r("json5").fromFragment(E);
          }
        } catch (e) {
          (r("FBLogger")("ad_blocker_defense_ghost_owl")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to parse ServerJS payload using json5"),
            (t = JSON.parse(_)));
        }
      else y || (t = JSON.parse(_));
      return (
        s &&
          t != null &&
          _.indexOf(c) !== -1 &&
          o("GHLTypenameRestore").restoreTypenameValues(t, c, u),
        t
      );
    }
    function _(e) {
      return p(e);
    }
    function f(e) {
      return p(e);
    }
    ((l.grabBootSlice = _), (l.takeBootFrame = f));
  },
  98,
);
