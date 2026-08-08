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
      u = !1,
      c = !1;
    function d() {
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
            var a = r("justknobx")._("2694") && r("gkx")("5023");
            r("justknobx")._("5589") &&
              r("gkx")("23984") &&
              (a
                ? o("GHLDetectionUtilsPreludeSafe").isCallShimmedCrossRealm()
                : o("GHLDetectionUtils").isCallShimmed()) &&
              o("GHLDetectionUtilsPreludeSafe").restoreNativeCall();
          } catch (e) {}
          u = !0;
        }
        if (!c) {
          try {
            r("justknobx")._("340") &&
              r("gkx")("999") &&
              o("GHLDetectionUtilsPreludeSafe").isXHRResponseGetterShimmed() &&
              o("GHLDetectionUtilsPreludeSafe").restoreNativeXHRGetters();
          } catch (e) {}
          c = !0;
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
    l.default = d;
  },
  98,
);
