__d(
  "ServerJSPayloadListener_NEW",
  ["FBLogger", "ServerJS", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e instanceof HTMLScriptElement) {
        var t = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== t)) {
          e.dataset.processed = "1";
          var n = null;
          try {
            if (((n = JSON.parse(e.textContent)), n == null))
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
      if (t.document != null && !(!window.Env || !window.Env.sjsListenerNew)) {
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
