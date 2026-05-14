__d(
  "ServerJSPayloadListener",
  [
    "FBLogger",
    "GHLDetectionUtilsPreludeSafe",
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
    function d(t) {
      var n = t.split(e);
      return n.join(s);
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
            n.__typename === "MarketplaceFeedListingItem" &&
              (n.__typename = "MarketplaceFeedAdStory");
            for (var a = Object.keys(n), i = 0; i < a.length; i++) {
              var l = n[a[i]];
              l != null && typeof l == "object" && t.push(l);
            }
          }
        }
    }
    function _(e) {
      if (e instanceof HTMLScriptElement) {
        var t = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== t)) {
          e.dataset.processed = "1";
          var n = null;
          try {
            var a = window.Env != null && "x3m9kf2n" in window.Env,
              i = window.Env != null && "k8pq2mnb" in window.Env,
              l = window.Env != null && "v7mp3qtn" in window.Env,
              s = e.textContent;
            if (
              (i && s != null && (s = d(s)),
              a && o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed())
            )
              try {
                var u =
                    typeof String == "function" &&
                    !(
                      String.toString === String.toString.toString &&
                      o("GHLDetectionUtilsPreludeSafe").normalize(
                        String.toString(),
                      ) === "function String() { [native code] }" &&
                      o("GHLDetectionUtilsPreludeSafe").normalize(
                        String.toString.toString(),
                      ) === "function toString() { [native code] }"
                    ),
                  c = window.Env != null && "r4wt7kmj" in window.Env;
                (c &&
                  u &&
                  o("GHLDetectionUtilsPreludeSafe").restoreNativeString(),
                  (n = r("json5").parse(s)));
              } catch (e) {
                (r("FBLogger")("ad_blocker_defense_ghost_owl")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to parse ServerJS payload using json5"),
                  (n = JSON.parse(s)));
              }
            else n = JSON.parse(s);
            if ((i && n != null && m(n), l && n != null && p(n), n == null))
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
    function f() {
      if (t.document != null) {
        var e = document.querySelectorAll(
          "script[data-sjs]:not([data-processed])",
        );
        for (var n of e) _(n);
      }
    }
    l.process = f;
  },
  99,
);
