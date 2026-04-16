__d(
  "getSameOriginTransport",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLNetworkLayer",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null,
      u = !1;
    function c() {
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
        if (!u) {
          try {
            r("justknobx")._("5589") &&
              r("gkx")("23984") &&
              o("GHLDetectionUtils").isCallShimmed() &&
              o("GHLDetectionUtilsPreludeSafe").restoreNativeCall();
          } catch (e) {}
          u = !0;
        }
        if (s == null)
          throw r("err")("getSameOriginTransport: XMLHttpRequestSafe is null");
        return new s();
      } catch (e) {
        throw r("err")(
          "getSameOriginTransport: %s",
          r("getErrorSafe")(e).message,
        );
      }
    }
    l.default = c;
  },
  98,
);
