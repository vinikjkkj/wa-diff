__d(
  "ServerJSPayloadListener",
  [
    "FBLogger",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "ServerJS",
    "err",
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
      if (e instanceof HTMLScriptElement) {
        var t = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== t)) {
          e.dataset.processed = "1";
          var n = null;
          try {
            var a = window.Env,
              i = a != null && "v9k2mt7q" in a,
              l = a != null && "d3hf9km2" in a,
              s = a != null && "k8pq2mnb" in a,
              u = a != null && "n5tq2wjb" in a,
              c = e.textContent;
            if (
              (s && c != null && (c = d(c, u)),
              i &&
                (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() ||
                  (l &&
                    o(
                      "GHLDetectionUtilsPreludeSafe",
                    ).isJSONParseBehaviorallyShimmed())))
            )
              try {
                var p = o(
                    "GHLDetectionUtilsPreludeSafe",
                  ).isStringBehaviorallyShimmed(),
                  _ = a != null && "r4wt7kmj" in a;
                (_ &&
                  p &&
                  o("GHLDetectionUtilsPreludeSafe").restoreNativeString(),
                  (n = r("json5").parse(c)));
              } catch (e) {
                (r("FBLogger")("ad_blocker_defense_ghost_owl")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to parse ServerJS payload using json5"),
                  (n = JSON.parse(c)));
              }
            else n = JSON.parse(c);
            if (
              (s && n != null && m(n),
              n != null && o("GHLTypenameRestore").restoreAllTypenames(n),
              n == null)
            )
              throw r("err")(
                "ServerJS payload marked with data-sjs was parsed as null",
              );
            new (r("ServerJS"))().handle(n);
          } catch (e) {
            r("FBLogger")("serverjs_listener")
              .catching(r("getErrorSafe")(e))
              .mustfix(
                "ServerJS based data-sjs payload failed to parse and execute.",
              );
          }
        }
      }
    }
    function _() {
      if (t.document != null) {
        var e = document.querySelectorAll(
          "script[data-sjs]:not([data-processed])",
        );
        for (var n of e) p(n);
      }
    }
    l.process = _;
  },
  99,
);
