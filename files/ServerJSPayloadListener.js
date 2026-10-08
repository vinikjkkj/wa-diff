__d(
  "ServerJSPayloadListener",
  ["FBLogger", "GHLServerJSParse", "ServerJS", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e instanceof HTMLScriptElement) {
        var a = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== a)) {
          e.dataset.processed = "1";
          var i = (n = e.nonce) != null ? n : e.getAttribute("nonce");
          if (i !== t) {
            var l;
            if (
              (r("FBLogger")("serverjs_listener").mustfix(
                "ServerJS payload nonce validation failed: %s v/s %s",
                i,
                t,
              ),
              ((l = window.Env) == null ? void 0 : l.sjsNonceEnforce) === !0)
            )
              return;
          }
          var s = null;
          try {
            if (
              ((s = o("GHLServerJSParse").hydrateBootData(e.textContent)),
              s == null)
            )
              throw r("err")(
                "ServerJS payload marked with data-sjs was parsed as null",
              );
            new (r("ServerJS"))().handle(s);
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
      var n, r;
      if (t.document != null) {
        var o = document.querySelectorAll(
            "script[data-sjs]:not([data-processed])",
          ),
          a =
            (n = (r = window.Env) == null ? void 0 : r.sjsNonce) != null
              ? n
              : "undefined";
        for (var i of o) e(i, a);
      }
    }
    l.process = s;
  },
  99,
);
