__d(
  "WAWebWindowsServerTimeReporter",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebWindowsHybridBridgeCommon",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    function c(e) {
      ((u = o("WATimeUtils").monotonicTime()), m(e));
    }
    function d(e) {
      (u != null &&
        o("WATimeUtils").monotonicTimeSince(u) <
          o("WATimeUtils").HOUR_MILLISECONDS) ||
        ((u = o("WATimeUtils").monotonicTime()), m(Date.now() - e * 1e3));
    }
    function m(e) {
      var t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge();
      if (t != null) {
        var n;
        (n = t.nativeAppStateBridge) == null ||
          n.updateServerTime == null ||
          n.updateServerTime(e);
        return;
      }
      p(e);
    }
    function p(t) {
      var a,
        i =
          (a = self.chrome) == null ||
          (a = a.webview) == null ||
          (a = a.hostObjects) == null
            ? void 0
            : a.NativeAppStateBridge,
        l = i == null ? void 0 : i.updateServerTimeAsync;
      l != null &&
        (s || (s = n("Promise"))).resolve(l.call(i, t)).catch(function (t) {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsServerTimeReporter: native did not take the server time",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        });
    }
    ((l.reportLoginServerTime = c), (l.reportServerTimeFromPing = d));
  },
  98,
);
