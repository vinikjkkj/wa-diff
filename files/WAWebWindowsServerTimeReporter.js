__d(
  "WAWebWindowsServerTimeReporter",
  ["WALogger", "WATimeUtils", "WAWebWindowsHybridBridgeCommon", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(e) {
      ((s = o("WATimeUtils").monotonicTime()), d(e));
    }
    function c(e) {
      (s != null &&
        o("WATimeUtils").monotonicTimeSince(s) <
          o("WATimeUtils").HOUR_MILLISECONDS) ||
        ((s = o("WATimeUtils").monotonicTime()), d(Date.now() - e * 1e3));
    }
    function d(e) {
      var t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge();
      if (t != null) {
        var n;
        (n = t.nativeAppStateBridge) == null ||
          n.updateServerTime == null ||
          n.updateServerTime(e);
        return;
      }
      m(e);
    }
    function m(t) {
      var n,
        a =
          (n = self.chrome) == null ||
          (n = n.webview) == null ||
          (n = n.hostObjects) == null
            ? void 0
            : n.NativeAppStateBridge,
        i = a == null ? void 0 : a.updateServerTimeAsync;
      i != null &&
        i.call(a, t).then(void 0, function (t) {
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
    ((l.reportLoginServerTime = u), (l.reportServerTimeFromPing = c));
  },
  98,
);
