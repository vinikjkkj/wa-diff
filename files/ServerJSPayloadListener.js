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
    function e(e) {
      if (e instanceof HTMLScriptElement) {
        var t = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== t)) {
          e.dataset.processed = "1";
          var n = null;
          try {
            var a = window.Env != null && "x3m9kf2n" in window.Env,
              i =
                typeof JSON.parse == "function" &&
                !(
                  JSON.parse.toString === JSON.parse.toString.toString &&
                  o("GHLDetectionUtilsPreludeSafe").normalize(
                    JSON.parse.toString(),
                  ) === "function parse() { [native code] }" &&
                  o("GHLDetectionUtilsPreludeSafe").normalize(
                    JSON.parse.toString.toString(),
                  ) === "function toString() { [native code] }"
                );
            if (a && i)
              try {
                var l =
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
                  s = window.Env != null && "r4wt7kmj" in window.Env;
                (s &&
                  l &&
                  o("GHLDetectionUtilsPreludeSafe").restoreNativeString(),
                  (n = r("json5").parse(e.textContent)));
              } catch (t) {
                (r("FBLogger")("ad_blocker_defense_ghost_owl")
                  .catching(r("getErrorSafe")(t))
                  .mustfix("Failed to parse ServerJS payload using json5"),
                  (n = JSON.parse(e.textContent)));
              }
            else n = JSON.parse(e.textContent);
            if (n == null)
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
    function s() {
      if (t.document != null) {
        var n = document.querySelectorAll(
          "script[data-sjs]:not([data-processed])",
        );
        for (var r of n) e(r);
      }
    }
    l.process = s;
  },
  99,
);
