__d(
  "getSameOriginTransport",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "GHLNetworkLayer",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      if (
        !(e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        !(e || (e = r("ExecutionEnvironment"))).isInWorker
      )
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "getSameOriginTransport: Same origin transport unavailable in the server environment.",
        );
      try {
        if (s == null)
          try {
            var n = r("justknobx")._("3323")
              ? o("GHLNetworkLayer").getGHLXhr()
              : null;
            n != null ? (s = n) : (s = t.XMLHttpRequest);
          } catch (e) {
            (r("FBLogger")("ghl").warn(
              "error while getGHLXhr in getSameOriginTransport: %s",
              r("getErrorSafe")(e).message,
            ),
              (s = t.XMLHttpRequest));
          }
        return new s();
      } catch (e) {
        throw r("err")(
          "getSameOriginTransport: %s",
          r("getErrorSafe")(e).message,
        );
      }
    }
    l.default = u;
  },
  98,
);
