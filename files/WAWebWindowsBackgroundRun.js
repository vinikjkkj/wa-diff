__d(
  "WAWebWindowsBackgroundRun",
  [
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebProtobufsWa6.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "backgroundRun",
      s = {
        1: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
        2: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
      },
      u = !1,
      c = o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
      d = null,
      m = 0;
    function p() {
      var t;
      return (
        !u &&
        r("WAWebEnvironment").isWindows &&
        new URLSearchParams((t = self.location.search) != null ? t : "").get(
          e,
        ) === "1"
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          p() ||
            (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            o("WAWebABProps").getABPropConfigValue(
              "win_hybrid_background_message_sync",
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return p() ? c : null;
    }
    function h(e) {
      var t = s[e];
      return t == null ? !1 : ((c = t), !0);
    }
    function y() {
      u = !0;
    }
    function C(e) {
      ((d = e), m++);
    }
    function b() {
      return m;
    }
    function v() {
      var e;
      return (
        d != null &&
        d !==
          ((e = g()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    ((l.isWindowsBackgroundRun = p),
      (l.logBackgroundMessageSyncExposureInUserSession = _),
      (l.getWindowsBackgroundRunConnectReason = g),
      (l.applyWindowsBackgroundRunConnectReason = h),
      (l.endWindowsBackgroundRun = y),
      (l.recordWindowsLoginConnectReason = C),
      (l.getWindowsLoginCount = b),
      (l.hasLoggedInWithOtherConnectReason = v));
  },
  98,
);
