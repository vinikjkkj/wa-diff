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
      d = null;
    function m() {
      var t;
      return (
        !u &&
        r("WAWebEnvironment").isWindows &&
        new URLSearchParams((t = self.location.search) != null ? t : "").get(
          e,
        ) === "1"
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          m() ||
            (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            o("WAWebABProps").getABPropConfigValue(
              "win_hybrid_background_message_sync",
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return m() ? c : null;
    }
    function g(e) {
      var t = s[e];
      return t == null ? !1 : ((c = t), !0);
    }
    function h() {
      u = !0;
    }
    function y(e) {
      d = e;
    }
    function C() {
      var e;
      return (
        d != null &&
        d !==
          ((e = f()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    ((l.isWindowsBackgroundRun = m),
      (l.logBackgroundMessageSyncExposureInUserSession = p),
      (l.getWindowsBackgroundRunConnectReason = f),
      (l.applyWindowsBackgroundRunConnectReason = g),
      (l.endWindowsBackgroundRun = h),
      (l.recordWindowsLoginConnectReason = y),
      (l.hasLoggedInWithOtherConnectReason = C));
  },
  98,
);
