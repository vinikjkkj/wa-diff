__d(
  "ServerJSPayloadListener_NEW",
  ["FBLogger", "ServerJS", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e instanceof HTMLScriptElement) {
        var o = e.dataset.contentLen;
        if (!(e.dataset.processed || e.textContent.length.toString() !== o)) {
          e.dataset.processed = "1";
          var a = (n = e.nonce) != null ? n : e.getAttribute("nonce");
          if (a !== t) {
            var i;
            if (
              (r("FBLogger")("serverjs_listener").mustfix(
                "ServerJS payload nonce validation failed: %s v/s %s",
                a,
                t,
              ),
              ((i = window.Env) == null ? void 0 : i.sjsNonceEnforce) === !0)
            )
              return;
          }
          var l = null;
          try {
            if (((l = JSON.parse(e.textContent)), l == null))
              throw r("err")(
                "ServerJS payload marked with data-sjs was parsed as null",
              );
            new (r("ServerJS"))().handle(l);
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
      if (t.document != null && !(!window.Env || !window.Env.sjsListenerNew)) {
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
